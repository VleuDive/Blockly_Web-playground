Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"if_mult_of_three",
            "message0":"%1 is divided by 3",
            "args0":[
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "output":null,
            "colour":230,
            "tooltip":"check if the number is divided by 3",
            "helpUrl":""
        }
    ]
);

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "def",
            "message0": "def %1 %2 ( %3 %4 ) %5 %6",
            "args0": [
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "func_name",
                "check": "String"
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "param"
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_statement",
                "name": "func_body"
              }
            ],
            "nextStatement":null,
            "previousStatement":null,
            "inputsInline": true,
            "colour": 350,
            "tooltip": "Define functions",
            "helpUrl": ""
        }
    ]
);

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"if_mult_of_five",
            "message0":"%1 is divided by 5",
            "args0":[
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "output":null,
            "colour":260,
            "tooltip":"check if the number is divided by 5",
            "helpUrl":""
        }
    ]
);