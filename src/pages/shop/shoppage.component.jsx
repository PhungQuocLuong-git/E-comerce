import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { createStructuredSelector } from "reselect";

import { selectIsFetching } from "../../redux/shop/shop.selector";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";



import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import './shoppage.styles.scss';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);


class ShopPage extends React.Component {
  
  componentDidMount() {
    console.log('didmount');
    const { fetchCollectionsStartAsync } = this.props;
    
    fetchCollectionsStartAsync();
    

  }

  render() {
    const { match,isCollectionsFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionsPageWithSpinner isLoading={isCollectionsFetching} {...props}/>}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching : selectIsFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
