// import BrowsePage from './pages/BrowsePage';
import GlobalStyles from './components/GlobalStyles';
import { Route,Switch } from 'react-router-dom';
// import WishlistPage from './pages/WishlistPage';
// import ShoppingCartPage from './pages/ShoppingCartPage';
// import HistoryPage from './pages/HistoryPage';
import BasePage from './pages/BasePage';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route path="/wishlist">
          <BasePage page="wishlist"/>
        </Route>
        <Route path="/cart">
          <BasePage page="cart"/>
        </Route>
        <Route path="/history">
          <BasePage page="history" />
        </Route>
        <Route path="/">
          <BasePage page="browse"/>
        </Route>
      </Switch>
  
    </div>
  );
}

export default App;
