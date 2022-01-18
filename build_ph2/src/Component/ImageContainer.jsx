import { connect } from 'react-redux';
import '../Css/imgCont.css';
import ImageCard from './ImageCard'

const ImageContainer = (props) => {
    // console.log(props)
    const {fArr, deleteFood} = props
    const foodArr = fArr?.map((e, index) => <ImageCard key={index} food={e} deleteFood={deleteFood}/>)
    return (
        <div className='imgContainer'>
            
            {foodArr}
        </div>
    )
}

const mstp = (state) => {
    console.log(state,'state')
    return{
        fArr: state.foods
    }
}
export default connect(mstp)(ImageContainer)