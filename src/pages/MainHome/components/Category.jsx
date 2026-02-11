import { useNavigate } from 'react-router-dom';
import { categories } from '../../../data/categoryData';
import { CateBox, CategoryWrap, CateGrid } from './categoryStyle';

const Category = () => {

    const navigate = useNavigate();

    const cateClick = (cate) =>{
        navigate(`/spots?area=1&category=${cate.code}`);
    }

    return (
        <CategoryWrap>
            <div className="inner">
                <div className="container">
                    <CateBox>
                        {categories.map(cate =>(
                            <CateGrid key={cate.id} $hoverColor={cate.$hoverColor}
                            onClick={()=> cateClick(cate)}
                            >
                                <span><cate.icon/></span>
                                <p className="title">{cate.name}</p>
                            </CateGrid>
                        ))}
                    </CateBox>
                </div>
            </div>
        </CategoryWrap>
    );
};

export default Category;