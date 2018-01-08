Blockly.Python['check'] = function(block) {
    var checkbox_c = block.getFieldValue('C')=='TRUE';
    var code;
    if(checkbox_c==true)
    {
       code='True';
    }
    else
    {
      code='False';
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
  };