Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"append_list",
            "message0":"add %1 to %2",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"to_add"
                },
                {
                    "type":"input_value",
                    "name":"list"
                }
            ],
            "nextStatement":null,
            "previousStatement":null,
            "inputsInline":true,
            "colour":300,
            "tooltip":"Add something to the list",
            "helpUrl":""
        }
    ]
);

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"break",
            "message0":"break",
            "nextStatement":null,
            "previousStatement":null,
            "colour":180,
            "tooltip":"Breakes the loop",
            "helpUrl":""
        }
    ]
);

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "short_math",
            "message0": "%1 %2 = %3 %4",
            "args0": [
              {
                "type": "input_value",
                "name": "a",
                "check": "Number"
              },
              {
                "type": "field_dropdown",
                "name": "select",
                "options": [
                  [
                    "+",
                    "+"
                  ],
                  [
                    "*",
                    "*"
                  ],
                  [
                    "-",
                    "-"
                  ],
                  [
                    "/",
                    "/"
                  ]
                ]
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "b",
                "check": "Number"
              }
            ],
            "inputsInline": true,
            "nextStatement":null,
            "previousStatement":null,
            "colour": 260,
            "tooltip": "Short version of arithmetic calculations",
            "helpUrl": ""
          }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [{
        "type": "for_list",
        "message0": "for %1 in %2 %3",
        "args0": [
            {
                "type":"input_value",
                "name":"iter"
            },
          {
            "type": "input_value",
            "name": "list"
          },
          {
            "type": "input_statement",
            "name": "to_do"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 260,
        "tooltip": "",
        "helpUrl": ""
      }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"true",
            "message0":"true",
            "output":"Boolean",
            "colour":90,
            "tooltip":"true",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"false",
            "message0":"false",
            "output":"Boolean",
            "colour":90,
            "tooltip":"false",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "and_or",
            "message0": "%1 %2  %3 %4",
            "args0": [
              {
                "type": "input_value",
                "name": "a",
              },
              {
                "type": "field_dropdown",
                "name": "select",
                "options": [
                  [
                    "or",
                    "or"
                  ],
                  [
                    "and",
                    "and"
                  ],
                ]
              },
              {
                "type": "input_dummy"
              },
              {
                "type": "input_value",
                "name": "b",
              }
            ],
            "inputsInline": true,
            "output":"Boolean",
            "colour": 50,
            "tooltip": "And/Or calculations",
            "helpUrl": ""
        }
    ]
)