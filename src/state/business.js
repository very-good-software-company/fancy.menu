import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { db } from '../firebase';
import { Auth } from './auth';

const initial = {
  business: null,
  businessLoading: false,
  businessError: null,
}

function useBusiness(initialState = initial) {
  const [ business, setBusiness ] = useState(initialState.business);
  const [ businessLoading, setBusinessLoading ] = useState(initialState.businessLoading);
  const [ businessError, setBusinessError ] = useState(initialState.businessError);
  const { user, isAuthenticating } = Auth.useContainer();

  let businessListener;

  const initBusinessListener = () => {
    if(businessListener || isAuthenticating) {
      return;
    }

    if(user) {

      setBusinessLoading(true);

      businessListener = db.collection('businesses')
      .where('owner', '==', user.uid)
      .onSnapshot(
        snapshot => {
          if(!snapshot.empty) {
            const businessSnap = snapshot.docs[0];
            setBusiness({ id: businessSnap.id,  ...businessSnap.data() });
            setBusinessLoading(false);
          } else {
            console.log('business not found');
            setBusiness(null);
            setBusinessLoading(false);
          }
        },
        error => console.log(error)
      );
    }
  }

  return {
    business,
    businessLoading,
    businessError,
    initBusinessListener,
  }
}

export const Business = createContainer(useBusiness);