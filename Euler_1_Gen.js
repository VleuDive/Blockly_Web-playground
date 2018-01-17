Blockly.Python['if_mult_of_three']=function(block){

    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="if_mult_of_three("+num+")";
    return [code,Blockly.Python.ORDER_NONE];
};
Blockly.Python['if_mult_of_five']=function(block){
    var num=Blockly.Python.valueToCode(block,'num',Blockly.Python.ORDER_ATOMIC);
    var code="if_mult_of_five("+num+")";
    return [code,Blockly.Python.ORDER_NONE];
}

Blockly.Python['def']=function(block){
    var name=block.getFieldValue('func_name');
    var parr=[];
    parr.push(Blockly.Python.valueToCode(block,'param',Blockly.Python.ORDER_NONE));
    if(block.inputList.length>3) {
        for (var i = 2; i < block.inputList.length - 1; i++) {
            parr.push(Blockly.Python.valueToCode(block, 'param' + (i-1), Blockly.Python.ORDER_NONE));
        }
    }
    var state=Blockly.Python.statementToCode(block,'func_body');
    var code="def "+name+"(";
    if(parr.length==1){
        code=code+parr[0]+")"+":\n"+state+"\n";
    }
    else {
        for (var i = 0; i < parr.length; i++) {
            if (i != parr.length-1) {
                code = code + parr[i] + ",";
            }
            else {
                code = code + parr[i];
            }
        }
        code=code+")"+":\n"+state+"\n";
    }
    return code;
}

