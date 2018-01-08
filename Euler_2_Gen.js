Blockly.Python['fib']=function(block){
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="fib("+num+")";
    return [code,Blockly.Python.ORDER_NONE];
};

Blockly.Python['if_even']=function(block){
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code=num+"%2==0";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['if_under_limit']=function(block){
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var limit=Blockly.Python.valueToCode(block,'limit',Blockly.Python.ORDER_ATOMIC);
    var code=num+"<="+limit;
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['return']=function(block){
    var toRet=Blockly.Python.valueToCode(block,'to_ret',Blockly.Python.ORDER_NONE);
    var code="return "+toRet+"\n";
    return code;
}