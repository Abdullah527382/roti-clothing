import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import "./collection.styles.scss";
import { motion } from "framer-motion";
import { pageTransition, pageVariants, pageStyle } from "../../pageTransitions";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <motion.div
      className="collection-page"
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h2 className="title"> {title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </motion.div>
  );
};

// ownProps is the props of the collectionPage component we are wrapping
const mapStateToProps = (state, ownProps) => ({
  // This selector needs a part of the state depending on the URL param
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
