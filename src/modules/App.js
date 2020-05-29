import React, { Component, Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./header/components/Header";
import Footer from "./common/components/Footer";
import Landing from "./landing/Landing";
import history from "./common/components/history";
import LinearProgress from "@material-ui/core/LinearProgress";
import { LocalizeProvider } from "react-localize-redux";
import ErrorBoundary from "./common/components/errorBoundary";
import { connect } from "react-redux";

function Loading({ error }) {
  if (error) {
    return (
      <div>
    <h2 style={{
      height: '40px',
      background: '#b3d9f7',
      color: 'white',
      textAlign: 'center',
      verticalAlign: 'middle',
      paddingTop: '5px',
      fontSize: '20px',
      fontWeight: '500'
    }}>
      Oh nooess! Something went wrong. Try re-loading!
      </h2>
      </div>
      )
  } else {
    return <LinearProgress color="secondary" />;
  }
}
export const GiftsListContainer = lazy(() => import('./gifts/containers/GiftsListContainer'));
export const ProfileContainers = lazy(() => import('./user/containers/profileContainers'));
export const GiftShowContainer = lazy(() => import('./gifts/containers/GiftShowContainer'));
export const GiftsSendContainer = lazy(() => import('./user/containers/giftsSendContainer'));
export const GiftsReceivedContainer = lazy(() => import('./user/containers/giftsReceivedContainer'));
export const AddUpdateForm = lazy(() => import('./admin/components/addUpdateForm'));
export const ErrorPage = lazy(() => import('./common/components/ErrorPage'));
export const UsersList = lazy(() => import('./user/components/usersList'));

class App extends Component {
  constructor(props){
    super(props);
    this.state= {}
  }
  render() {
    return (
      <ErrorBoundary>
        <LocalizeProvider>
          <Header />
          <Router history={history}>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/giftCards/:id" render={(props) => <GiftShowContainer {...props} />} />
                <Route exact path="/giftCards" render={() => <GiftsListContainer />} />
                <Route exact path="/Profile" render={() => <ProfileContainers />} />
                <Route exact path="/GiftsSend" render={() => <GiftsSendContainer />} />
                <Route exact path="/UsersList" render={() => <UsersList />} />)
                <Route
                  exact
                  path="/GiftsReceived"
                  render={() => <GiftsReceivedContainer />}
                />
                <Route exact path="/AddUpdateForm" render={() => <AddUpdateForm />} />
                <Route exact path='/AddUpdateForm/:id' render={() => <AddUpdateForm />} />
                <Route exact path="/" component={Landing} />
                <Route exact path="/404" render={() => <ErrorPage />} />
                <Redirect to="/404" />
              </Switch>
            </Suspense>
          </Router>
          <Footer />
        </LocalizeProvider>
       </ErrorBoundary>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.loginStatus,
    userDetails: state.login.detailsObject
  };
};
export default connect(mapStateToProps,null)(App)