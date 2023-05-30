/* eslint-disable react/jsx-props-no-spreading */
import { resetIdCounter, useCombobox } from 'downshift';
import gql from 'graphql-tag';
import { useLazyQuery, useQuery } from '@apollo/client';
import debounce from 'lodash.debounce';
import { DropDownItem, DropDown, SearchStyles } from './styles/DropDown';

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export default function Search() {
  const [findItems, { loading, data, error }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      fetchPolicy: 'network-only',
      notifyOnNetworkStatusChange: true,
    }
  );
  console.log(loading, data, error);
  const items = data?.searchTerms || [];
  console.log('Data is: ', data);
  const findItemsButChill = debounce(findItems, 350);
  resetIdCounter();
  const { inputValue, getMenuProps, getInputProps, getComboboxProps } =
    useCombobox({
      items: [],
      onInputValueChange() {
        console.log('Input changed!');
        console.log('Input value is: ', inputValue);
        findItemsButChill({
          variables: {
            searchTerm: inputValue,
          },
        });
      },
      onSelectedItemChange() {
        console.log('Selected Item change!');
      },
    });
  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Search for an Item',
            id: 'search',
            className: 'loading',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {items.map((item) => (
          <DropDownItem>{item.name}</DropDownItem>
        ))}
      </DropDown>
    </SearchStyles>
  );
}
