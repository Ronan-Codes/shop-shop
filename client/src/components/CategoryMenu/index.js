import React, { useEffect } from 'react';
// useEffect() used along with Global State
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';

// for Global State 
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';

// IndexedDB
import { idbPromise } from '../../utils/helpers';

// import { useStoreContext } from '../../utils/GlobalState';
  // replaced with Redux Version
import { useSelector, useDispatch } from 'react-redux'


function CategoryMenu() {
  // const [state, dispatch] = useStoreContext();
  // replace useStoreContext with Redux version
  const state = useSelector(state => state);
  const dispatch = useDispatch()

  const { categories } = state;

  // Need loading for idbPromise function
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);
  // useStoreContext() Hook retrieves the current state from the global state object and the dispatch() method to update state. 

  useEffect(() => {
    // if categoryData exists or has changed from the response of useQuery, then run dispatch
    if (categoryData) {
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to 
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories
      });

      categoryData.categories.forEach(category => {
        idbPromise('categories', 'put', category);
      });

    } else if (!loading) {
      idbPromise('categories', 'get').then(categories => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories
        });
      });
    }
    
  }, [categoryData, loading, dispatch])
  // useEffect now runs on load, categoryData change, and dispatch. (1st argument is what will run.)

  const handleClick = id => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id
    })
  }

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map(item => (
        <button
          key={item._id}
          onClick={() => {
            // setCategory(item._id); (removed Prop)
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
