import Header from './Header';

const layourStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layourStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;

import Header from './Header';

// Layout as a Higher Order Component:
//const layoutStyle = {
//   margin: 20,
//   padding: 20,
//   border: '1px solid #DDD'
// };

// const withLayout = Page => {
//   return () => (
//     <div style={layoutStyle}>
//       <Header />
//       <Page />
//     </div>
//   );
// };

// export default withLayout;