import React, { Component } from 'react'
import FormGenerator from '../tools/FormGenerator/FormGenerator';
import { FIELDS } from '../tools/FormGenerator/FormGeneratorFields';

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
export default class TourismForm extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = (data,resetForm,completed) => {
        const myData = {
            'name':data.name?data.name:null,
            // 'phone':data.phone?`${countryCode}${data.phone}`:null,
            'email':data.email?data.email:null,
            'password':data.password?data.password:null,
            'password_confirm':data.password_confirm?data.password_confirm:null,
            'institution':data.institution?data.institution:null,
            'yearCompleted':data.year?data.year:null,
            'gender':data.gender?data.gender:null,
        }
       
}
    render() {
        return (
            <div className='width-100-cent height-100-cent a-center padding-20 y-scroll f-column j-start'>
                <div className='width-60-cent height-auto elevated-blend padding-20'>
                <FormGenerator
                            fields = {[
                            {
                                fieldType: FIELDS.dropDown,
                                property:'name',
                                name: "touristSite",
                                label: "Which site have you visited before?",
                                placeholder: "Which site have you visited before?",
                                dropDownList:TouristSite,
                                required: true,
                            },
                            {
                                fieldType: FIELDS.radioQuestion,
                                groups:true,
                                question:"Do you think the Government is doing enough to promote Tourism?",
                                groupItems:[
                                    {
                                        name: "govermentEffort",
                                        label: "Yes",
                                        placeholder: "Yes",
                                        required: false,
                                    },
                                    {
                                        name: "govermentEffort",
                                        label: "No",
                                        placeholder: "No",
                                        required: false,
                                    }
                                ],
                            },
                            {
                                fieldType: FIELDS.radioQuestion,
                                groups:true,
                                question:"Will you visit a Tourist site in the next 12 months?",
                                groupItems:[
                                    {
                                        name: "revisit",
                                        label: "Yes",
                                        placeholder: "Yes",
                                        required: false,
                                    },
                                    {
                                        name: "revisit",
                                        label: "No",
                                        placeholder: "No",
                                        required: false,
                                    }
                                ],
                            },
                            {
                                fieldType: FIELDS.radioQuestion,
                                groups:true,
                                question:"How will you rate overall service level in our restaurants? , So so, hmmmm, Okay , ?",
                                groupItems:[
                                    {
                                        name: "finalcomparism",
                                        label: "Terrible",
                                        placeholder: "Terrible",
                                        required: false,
                                    },
                                    {
                                        name: "finalcomparism",
                                        label: "So so",
                                        placeholder: "So so",
                                        required: false,
                                    },
                                    {
                                        name: "finalcomparism",
                                        label: "hmmmm",
                                        placeholder: "hmmmm",
                                        required: false,
                                    },
                                    {
                                        name: "finalcomparism",
                                        label: "Okay",
                                        placeholder: "Okay",
                                        required: false,
                                    },
                                    {
                                        name: "finalcomparism",
                                        label: "Great",
                                        placeholder: "Great",
                                        required: false,
                                    },
                                    
                                ],
                            },
                            
                            // {
                            // fieldType: FIELDS.dropDown,
                            // property:'Institution',
                            // name: "institution",
                            // label: "Institutions",
                            // placeholder: "Institution",
                            // dropDownList:INSTITUTIONS.TERTIARY.concat(INSTITUTIONS.SECONDARY),
                            // required: true,
                            // },
                            // {
                            // fieldType: FIELDS.dropDown,
                            // property:'year',
                            // name: "year",
                            // label: "Year of Completion",
                            // placeholder: "Year of Completion",
                            // dropDownList:generateYears(),
                            // required: true,
                            // },
                            
                            
                            
                        ]}
                        redirectText = {"Already have an account? Login"}
                        handleOnSubmit = {(data, resetFunc,completed)=>{
                            this.handleSubmit(data,resetFunc,completed)
                        }}
                        buttonStyles={{backgroundColor:"#5E71E4", borderRadius:"5px"}}
                    
                    />
                </div>
            </div>
        )
    }
}
