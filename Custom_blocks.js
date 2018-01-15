
"use strict";
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

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"ceil",
            "message0":"ceiling of %1",
            "args0":[
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "output":"Number",
            "colour":70,
            "tooltip":"Returns the least integer that is larger than input",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"max",
            "message0":"max in list %1",
            "args0":[
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Array"
                }
            ],
            "output":"Number",
            "inputsInline":true,
            "colour":70,
            "tooltip":"Returns the largest integer in list",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"list_with_element",
            "message0":"create list with element %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"element"
                }
            ],
            "output":null,
            "colour":355,
            "tooltip":"Creates the list which contains an element",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"simple_for",
            "message0":"for %1 from %2 to %3 %4",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"varr"
                },
                {
                    "type":"input_value",
                    "name":"r1",
                    "check":"Number"
                },
                {
                    "type":"input_value",
                    "name":"r2",
                    "check":"Number"
                },
                {
                    "type":"input_statement",
                    "name":"to_do"
                }
            ],
            "nextStatement":null,
            "previousStatement":null,
            "inputsInline":true,
            "colour":256,
            "tooltip":"Simplified version of for block",
            "helpUrl":""
            
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"prime_list",
            "message0":"Primes smaller than %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"limit",
                    "check":"Number"
                }
            ],
            "output":"Arrray",
            "colour":200,
            "tooltip":"Find primes smaller than the input",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"find_fract_list",
            "message0":"fractions of %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "output":"Array",
            "colour":200,
            "tooltip":"Returns the list of the fraction of given input",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"universal_print",
            "message0":"print value of %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"inp"
                }
            ],
            "nextStatement":null,
            "previousStatement":null,
            "colour":205,
            "tooltip":"print function for list, num, ...etc",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"to_string",
            "message0":"change %1 to String",
            "args0":[
                {
                    "type":"input_value",
                    "name":"input",
                    "check":"Number"
                }
            ],
            "output":"String",
            "colour":190,
            "tooltip":"Converts number into string",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"slice_list",
            "message0":"slice %1 in range%2",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"list",
                    "check":"Array"
                }
                ,
                {
                    "type":"input_value",
                    "name":"range"
                    
                }
            ],
            "inputsInline":true,
            "nextStatement":null,
            "previousStatement":null,
            "colour":150,
            "tooltip":"Slices the List",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"slice_range",
            "message0":"%1 to %2",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"r1",
                },
                {
                    "type":"input_value",
                    "name":"r2",
                }
            ],
            "inputsInline":true,
            "output":"String",
            "colour":260,
            "tooltip":"The range of slicing",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"slice_list_output",
            "message0":"slice %1 in range%2",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"list",
                    "check":"Array"
                }
                ,
                {
                    "type":"input_value",
                    "name":"range"
                    
                }
            ],
            "inputsInline":true,
            "output":"Array",
            "colour":150,
            "tooltip":"Slices the List",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"find_palindrome",
            "message0":"find palindrome with %1 digits",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"digit",
                    "check":"Number"
                }
            ],
            "output":"Array",
            "colour":50,
            "tooltip":"Finds the palindrome list of given digit",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"gcd",
            "message0":"gcd of %1 %2",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num1",
                    "check":"Number"
                },
                {
                    "type":"input_value",
                    "name":"num2",
                    "check":"Number"
                }
            ],
            "inputsInline":true,
            "output":"Number",
            "colour":140,
            "tooltip":"Finds GCD of given numbers",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"lcm_part",
            "message0":"lcm of %1 %2",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num1",
                    "check":"Number"
                },
                {
                    "type":"input_value",
                    "name":"num2",
                    "check":"Number"
                }
            ],
            "inputsInline":true,
            "output":"Number",
            "colour":120,
            "tooltip":"Finds LCM of given numbers",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"abs",
            "message0":"absolute value of %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "inputsInline":true,
            "output":"Number",
            "colour":100,
            "tooltip":"Returns the absolute value of given input",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"lcm_total",
            "message0":"lcm of all numbers smaller than %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"limit",
                    "check":"Number"
                }
            ],
            "inputsInline":true,
            "output":"Number",
            "colour":80,
            "tooltip":"Finds of the lcm of all numbers under the given limit",
            "helpUrl":""
        }
    ]
)