import React,{useState,useEffect} from 'react';
import { InputBase,Box,styled, List,ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector,useDispatch} from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
    background: #fff;
    width:38%;
    border-radius:3px;
    margin-left:10px;
    display:flex;
    
`
const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
`

const SearchBarWrapper = styled(SearchIcon)`
    color:blue;
    padding:5px;
    display:flex;
`

const ListWrapper = styled(List)`
  position:absolute;
  background-color:#FFFFFF;
  color:#000000;
  margin-top:35px;
`

const HoveredListItem = styled(ListItem)`
  &:hover {
    background-color: lightgrey;
  }
`;

function Search() {
  const [text, setText] = useState('');

  const {products} = useSelector(state => state.getProducts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])
  

  const getText = (text) =>{
    setText(text);
    console.log(text);
  }

  return (
      <SearchContainer>
        <InputSearchBase placeholder='Search for products, brands and more' value={text} onChange={(e)=>getText(e.target.value)} />
        <SearchBarWrapper/>
        {
          text &&
          <ListWrapper>
            {
              products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                <HoveredListItem >
                    <Link to={`/product/${product.id}`}
                      onClick={()=>setText('')}
                      style={{textDecoration:'none',color:'inherit'}}
                    >
                    {product.title.longTitle}
                    </Link>
                </HoveredListItem>
              ))
            }
          </ListWrapper>
        }
      </SearchContainer>
  )
}

export default Search
