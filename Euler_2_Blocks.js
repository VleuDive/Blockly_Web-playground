Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"fib",
            "message0":"%1th fibonacci num",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "output":null,
            "colour":150,
            "tooltip":"returns nth fibonacci number",
            "helpUrl":""

        }
    ]
);

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"if_even",
            "message0":"%1 is even",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                }
            ],
            "output":null,
            "colour":130,
            "tooltip":"finds if the number n is even",
            "helpUrl":""
        }
    ]
);

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"if_under_limit",
            "message0":"%1 is under %2",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"num",
                    "check":"Number"
                },
                {
                    "type":"input_value",
                    "name":"limit",
                    "check":"Number"
                }
            ],
            "inputsInline":true,
            "output":null,
            "colour":100,
            "tooltip":"finds if the number is under the limit",
            "helpUrl":""
        }
    ]
)

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type":"return",
            "message0":"return %1",
            "args0":
            [
                {
                    "type":"input_value",
                    "name":"to_ret"
                }
            ],
            "nextStatement":null,
            "previousStatement":null,
            "colour":50,
            "tooltip":"Returns something",
            "helpUrl":""
        }
    ]
);