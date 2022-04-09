import { connect } from 'react-redux';
import { Sliders } from './Slider';



let mapStateToProps=(state)=>{
    return {
    state: state.sliderPages,  
 }}

 
 export const SliderContainerReact = connect(mapStateToProps)(Sliders)