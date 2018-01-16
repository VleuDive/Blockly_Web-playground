"use strict";

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "if_mult_of_three",
            "message0": "%1 is divided by 3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "num",
                    "check": "Number"
                }
            ],
            "output": null,
            "colour": 230,
            "tooltip": "check if the number is divided by 3",
            "helpUrl": ""
        },
        {
            "type": "def",
            "message0": "def %1 %2 with parameter %3 %4 %5 ",
            "args0": [
                {
                    "type": "field_input",
                    "name": "func_name",
                    "text": " "
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "param"
                },
                {
                    "type":"field_dropdown",
                    "name":"property",
                    "options":[
                        ["none","none"],
                        ["add","add"],
                        ["remove","remove"]
                    ]
                },
                {
                    "type": "input_statement",
                    "name": "func_body"
                }
            ],
            "inputsInline": true,
            "colour": 230,
            "tooltip": "",
            "helpUrl": "",
            "mutator":"def_custom_mutator",
            "parCount":1
        },
        {
            "type": "if_mult_of_five",
            "message0": "%1 is divided by 5",
            "args0": [
                {
                    "type": "input_value",
                    "name": "num",
                    "check": "Number"
                }
            ],
            "output": null,
            "colour": 230,
            "tooltip": "check if the number is divided by 5",
            "helpUrl": ""
        }

    ]
);


Blockly.def_custom_mutator_MIXIN={

    mutationToDom:function(){
        var container=document.createElement('mutation');
        var newInput=(this.getFieldValue('property')=='add');
        var removeInput=(this.getFieldValue('property')=='remove');
        container.setAttribute('new_input',newInput);
        return container;
    },
    domToMutation:function(xmlElement){
        var newInput=(xmlElement.getAttribute('new_input')=='true');
        var removeInput=(xmlElement.getAttribute('remove_input')=='true');
        this.updateShape_(newInput,removeInput);
    },
    // compose:function(){
    //
    // },
    // decompose:function(){
    //
    // },custom UI가 없을 것이므로 사용 안함!
    updateShape_:function(newInput,removeInput){
        var inputExists=this.parCount==1;
        if(newInput){
            if(!removeInput) {
                if (!inputExists) {
                    this.appendValueInput('param' + this.parCount);
                    this.parCount++;
                }
            }
        }else if(inputExists){
            this.removeInput('param'+this.parCount);
        }
        else{
            if(removeInput){
                this.removeInput('param'+this.parCount);
            }
        }
    }
};

Blockly.DEF_CUSTOM_MUTATOR_EXTENSION=function(){
    this.getField('property').setValidator(function(option){
        var newInput=(option=='add');
        var removeInput=(option=='remove');
        this.sourceBlock_.updateShape_(newInput,removeInput);
    });
};

Blockly.Extensions.registerMutator('def_custom_mutator',Blockly.def_custom_mutator_MIXIN,Blockly.DEF_CUSTOM_MUTATOR_EXTENSION);