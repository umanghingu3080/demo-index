/* eslint-disable react/prop-types */
import NavigationBar from './NavigationBar';

const Layout = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
    </>
  );
};

export default Layout;
