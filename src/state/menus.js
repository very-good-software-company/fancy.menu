import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { db } from '../firebase';
import { Auth } from './auth';
import { Business } from './business';

const initial = {
  menus: [],
  menusLoading: false,
  menusError: null,
}

function useMenus(initialState = initial) {
  const { user, isAuthenticating } = Auth.useContainer();
  const { business, businessLoading } = Business.useContainer();
  const [ menus, setMenus ] = useState(initialState.menus);
  const [ menusLoading, setMenusLoading ] = useState(initialState.menusLoading);
  const [ menusError, setMenusError ] = useState(initialState.menusError);

  let menusListener;
  
  const initMenusListener = () => {
    if(menusListener || isAuthenticating || businessLoading) {
      return;
    }

    if(user && business) {
      setMenusLoading(true);

      menusListener = db.collection('businesses')
      .doc(business.id)
      .collection('menus')
      .onSnapshot(
        snapshot => {
          if(!snapshot.empty) {
            setMenus(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            setMenusLoading(false);
          } else {
            console.log('no menus');
            setMenus([]);
            setMenusLoading(false);
          }
        },
        error => console.log(error)
      )
    }
  }

  useEffect(() => {
    initMenusListener();
  }, [businessLoading, isAuthenticating]);

  return {
    menus,
    menusLoading,
    menusError,
    initMenusListener,
  }
}

export const Menus = createContainer(useMenus);