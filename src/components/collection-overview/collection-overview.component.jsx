import React from 'react';
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionsOverview =({collections}) =>(
    <div className='collections-overview'>
        {collections.map(({ id, ...ortherCollectionProps }) => (
      <CollectionPreview key={id} {...ortherCollectionProps} />
    ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
  });
  
  export default connect(mapStateToProps)(CollectionsOverview);
  