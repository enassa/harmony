import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';
import potbelly from '../assets/images/potbelly.jpeg';
import { convertToJson, getWindowWidth } from '../contants/generalFunctions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendAnswers } from '../store/actions/answersActions';
import { foood2, potbelly13, vertical } from '../contants/uiConstants';

const TouristSite = [
    {
        name:"Mole Park"
    },
    {
        name:"Kakum National Park"
    },
    {
        name:"Cape Coast Castle"
    },
    {
        name:"Elmina Castle"
    },
    {
        name:"National Museum"
    },
    {
        name:"Aburi Botanical Garden"
    },
    {
        name:"Mountain Afadjato "
    },
    {
        name:"W.E.B. Dubois Centre " 
    },
    {
        name:"Manhyia Palace " 
    },
    {
        name:"Boabeng Fiema Monkey Sanctuary" 
    },
    {
        name:"Kintampo Balls" 
    },
    {
        name:"Tango Hills"
    },
    {
        name:"Cape Three Points " 
    },
    {
        name:"Kumasi Zoo" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Kakum National Park" 
    },
    {
        name:"Paga Zenga Crocodile Pond" 
    },
    {
        name:"Xavi Bird Sanctuary " 
    },
    {
        name:"Labadi Beach" 
    },
    {
        name:"Lake Bosomtwe" 
    },
    {
        name:"Wli Waterfalls" 
    },
    {
        name:"Lakeside Marina Park" 
    },
    {
        name:"The Manhyia Palace" 
    },
    {
        name:"Kwame Nkrumah Memorial Park and Mausoleum" 
    },
    {
        name:"Boti Falls" 
    },
    {
        name:"St Agustine College " 
    },
]
const FoodMenu = [
    {
        name:"Chicken Wings"
    },
    {
        name:"Pizza"
    },
    {
        name:"Burgers"
    },
    {
        name:"Meatballs"
    },
    {
        name:"BBQ Ribs"
    },
    {
        name:"Tacos"
    },
    {
        name:"Pasta"
    },
    {
        name:"Asian Fusion" 
    },
    {
        name:"Hotdogs" 
    },
    {
        name:"Fish and Chips" 
    },
    {
        name:"Full Chicken" 
    },
    {
        name:"Steaks"
    },
    {
        name:"Seafood" 
    },
    {
        name:"Salad" 
    },
    {
        name:"Breakfast" 
    },
    {
        name:"Others" 
    },
]
class TakoutsForm3 extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    handleSubmit = (data,resetForm,completed) => {
        delete data.undefined;
        this.props.sendAnswers(data)
        completed()
        this.props.history.push(`/potbelly/forms/options/take-outs/4`)
    }
    render() {
   
        const innerWidth = getWindowWidth()
        const followUpTo = {
            followUpQuestion:'orderMeans',
            followUpAnswer:'Call Centre'
        }
        return (
            <div style={{backgroundImage:`url(${potbelly13})`}} className={` ${innerWidth<800?'padding-0':'padding-20'} fit-background-contain width-100-cent height-100-cent nate-white-bg  a-center  y-scroll f-column j-star`}>
            <div style={{backdropFilter: "blur(3px)"}} className={`${innerWidth<800?'width-100-cent':'width-70-cent'} elevated-blend above-all curved-corners height-auto padding-20 `}>
                <FormGenerator
                    handleOnSubmit = {(data, resetFunc,completed)=>{
                        this.handleSubmit(data,resetFunc,completed)
                    }}
                    // enableConfirmation={true}
                    redirectText = {"Already have an account? Login"}
                    buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    buttonText = 'Next'
                    fields = {[
                        {
                            fieldType: FIELDS.radioQuestion,
                            vertical:vertical,
                            groups:true,
                            question:"Will you recommend us to a friend?",
                            groupItems:[
                                {
                                    name: "recommend", 
                                    label: "Yes",
                                    placeholder: "Yes",
                                    required: true,
                                },
                                {
                                    name: "recommend",
                                    label: "Maybe",
                                    placeholder: "Maybe",
                                    required: true,
                                },
                                {
                                    name: "recommend",
                                    label: "Hell No",
                                    placeholder: "Hells No",
                                    required: true,
                                },
                            ],
                        },
                        {
                            fieldType: FIELDS.select,
                            multiple:true,
                            vertical:vertical,
                            property:'name',
                            name: "orderInfo",
                            label: "What did you order?",
                            placeholder: "What did you order?",
                            dropDownList:FoodMenu,
                            required: true,
                        },
                        {
                            fieldType: FIELDS.select,
                            property:'name',
                            name: "menuFavorite",
                            label: "What is your favorite food item on the menu?",
                            placeholder: "What is your favourite on our menu?",
                            dropDownList:FoodMenu,
                            required: true,
                            },
                ]}
                />
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAnswers: (answers) => dispatch(sendAnswers(answers)),
  }
}
const mapStateToProps = (state) => {
    return {  
        submissionState:state.answersReducer.submissionState,
        receivedData:state.answersReducer.receivedData,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(TakoutsForm3));
