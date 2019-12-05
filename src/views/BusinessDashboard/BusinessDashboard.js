import React, { useEffect, Fragment } from 'react';
import { Business } from '../../state/business';
import { Auth } from '../../state/auth';
import { Menus } from '../../state/menus';
import { db } from '../../firebase';

const BusinessDashboard = ({ history }) => {
  const { user } = Auth.useContainer();
  const { business, businessLoading, initBusinessListener } = Business.useContainer();
  const { menus, menusLoading, initMenusListener } = Menus.useContainer();

  useEffect(() => {
    initBusinessListener();
  }, []);

  const submitBusiness = e => {
    e.preventDefault();

    db.collection('businesses')
    .add({
      name: e.target.businessName.value,
      owner: user.uid,
    })
    .catch(console.log);
  }

  const menuCreate = e => {
    e.preventDefault();

    db.collection('businesses')
    .doc(business.id)
    .collection('menus')
    .add({
      title: e.target.menuName.value,
    })
    .catch(console.log);
  }

  const deleteMenu = menuId => {
    if(window.confirm('Are you sure you wanna delete this guy and stuff?!?!?!')) {
      db.collection('businesses')
      .doc(business.id)
      .collection('menus')
      .doc(menuId)
      .delete()
      .catch(console.log);
    }
  }

  return (
    <>
      { businessLoading && (
        <div>Business is Loading...</div>
      ) }

      { !businessLoading && business && (
        <>
          <h1>{ business.name }</h1>

          { menusLoading && <div>Loading Menus...</div> }

          { !menusLoading && menus.length && (
            <>
              { menus.map(menu => {
                return (
                  <Fragment key={menu.id}>
                    <button onClick={() => deleteMenu(menu.id)}>Delete</button>
                    <div>{ menu.title }</div>
                  </Fragment>
                );
              }) }
            </>
          ) }

          { !menusLoading && menus.length < 1 && (
            <>
              <h2>Create a menu!</h2>
              <form onSubmit={menuCreate}>
                <div>
                  <label>Menu Name</label>
                </div>
                <div>
                  <input type="text" name="menuName" placeholder="Enter a menu name" />
                </div>
                <button type="submit">Create Menu</button>
              </form>
            </>
          ) }
        </>
      ) }

      { !businessLoading && !business && (
        <>
          <h1>Create Your Restaurant</h1>
          <form onSubmit={submitBusiness}>
            <div>
              <label>Business Name</label>
            </div>
            <div>
              <input type="text" name="businessName" placeholder="Enter a business name" />
            </div>
            <button type="submit">Create Business / Website</button>
          </form>
        </>
      ) }
    </>
  );
}

export default BusinessDashboard;