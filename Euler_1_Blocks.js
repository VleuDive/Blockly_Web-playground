"use strict";

Blockly.defineBlocksWithJsonArray(
    [
        {
            "type": "if_mult_of_three",
            "message0": "%1 is divided by 3",
            "args0": [
                {
                    "type": "input_value",
                    "func_name": "num",
                    "check": "Number"
                }
            ],
            "output": null,
            "colour": 230,
            "tooltip": "check if the number is divided by 3",
            "helpUrl": ""
        }
    ]
);
//def의 input 이름은 순서대로 func_func_name, param, func_body
Blockly.Blocks['container']={
    init: function() {
        this.appendDummyInput()
            .appendField("Container");
        this.appendStatementInput("STACK")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(350);
        this.setTooltip("");
        this.setHelpUrl("");
        this.hasStatements_=true;
    },
    // getProcedureCall:function(){
    //     return (this.getFieldValue('Container'));
    // },
    // renameProcedure:function(oldName,newName){
    //     if(Blockly.Names.equals(oldName,this.getProcedureCall())){
    //         this.setFieldValue(newName,'Container');
    //         this.setTooltip(this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP:Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP).replace('%1',newName);
    //     }
    // },
    // setProcedureParameters_:function(paramNames,paramIds){
    //     var defBlocks=Blockly.Procedures.getDefinition(this.getProcedureCall(),this.workspace);
    //     var mutatorOpen=defBlocks&&defBlocks.mutator&&defBlocks.mutator.isVisible();
    //     if(!mutatorOpen){
    //         this.quarkConnections_={};
    //         this.quarkIds_=null;
    //     }
    //     if(!paramIds){
    //         return;
    //     }
    //     if(goog.array.equals(this.arguments_,paramNames)){
    //         this.quarkIds_=paramIds;
    //         return;
    //     }
    //     if(paramIds.length!=paramNames.length){
    //         throw 'Error: paramNames and paramIds must be the same length.';
    //     }
    //     this.setCollapsed(false);
    //     if(!this.quarkIds_){
    //         this.quarkConnections_={};
    //         if(paramNames.join('\n')==this.arguments_.join('\n')){
    //             this.quarkIds_=paramIds;
    //         }else{
    //             this.quarkIds_=[];
    //         }
    //     }
    //     var savedRendered=this.rendered;
    //     this.rendered=false;
    //     for(var i=0;i<this.arguments_.length;i++){
    //         var input=this.getInput('ARG'+i);
    //         if(input){
    //             var connection=input.connection.targetConnection;
    //             this.quarkConnections_[this.quarkIds_[i]]=connection;
    //             if(mutatorOpen&&connection&&paramIds.indexOf(this.quarkIds_[i])==-1){
    //                 connection.disconnect();
    //                 connection.getSourceBlock().bumpNeighbours_();
    //             }
    //         }
    //     }
    //     this.arguments_=[].concat(paramNames);
    //     this.updateShape_();
    //     this.quarkIds_=paramIds;
    //     if(this.quarkIds_){
    //         for(var i=0;i<this.arguments_.length;i++){
    //             var quarkId=this.quarkIds_[i];
    //             if(quarkId in this.quarkConnections_){
    //                 var connection=this.quarkConnections_[quarkId];
    //                 if(!Blockly.Mutator.reconnect(connection,this,'ARG'+i)){
    //                     delete this.quarkConnections_[quarkId];
    //                 }
    //             }
    //         }
    //     }
    //     this.rendered=savedRendered;
    //     if(this.rendered){
    //         this.render();
    //     }
    // },
    // updateShape_:function(){
    //     for(var i=0;i<this.arguments_.length;i++){
    //         var field=this.getField('ARGNAME'+i);
    //         if(field){
    //             Blockly.Events.disable();
    //             try{
    //                 field.setValue(this.arguments_[i]);
    //             }finally{
    //                 Blockly.Events.enable();
    //             }
    //         }else{
    //             field=new Blockly.FieldLabel(this.arguments_[i]);
    //             var input=this.appendValueInput('ARG'+i)
    //                 .setAlign(Blockly.ALIGN_RIGHT)
    //                 .appendField(field,'ARGNAME'+i);
    //             input.init();
    //         }
    //     }
    //     while(this.getInput('ARG'+i)){
    //         this.removeInput('ARG'+i);
    //         i++;
    //     }
    //     var topRow=this.getInput('TOPROW');
    //     if(topRow){
    //         if(this.arguments_.length){
    //             if(!this.getField('WITH')){
    //                 topRow.removeField('WITH');
    //             }
    //         }
    //     }
    // },
    // mutationToDom:function(){
    //     var container=document.createElement('mutation');
    //     container.setAttribute('name',this.getProcedureCall());
    //     for(var i=0;i<this.arguments_.length;i++){
    //         var parameter=document.createElement('arg');
    //         parameter.setAttribute('name',this.arguments_[i]);
    //         container.appendChild(parameter);
    //     }
    //     return container;
    // },
    // domToMutation:function(xmlElement){
    //     var name=xmlElement.getAttribute('name');
    //     this.renameProcedure(this.getProcedureCall(),name);
    //     var args=[];
    //     var paramIds=[];
    //     for(var i=0,childNode;childNode=xmlElement.childNodes[i];i++){
    //         if(childNode.nodeName.toLowerCase()=='arg'){
    //             args.push(childNode.getAttribute('name'));
    //             paramIds.push(childNode.getAttribute('paramId'));
    //         }
    //     }
    //     this.setProcedureParameters_(args,paramIds);
    // },
    // renameVar: function(oldName,newName){
    //     for(var i=0;i<this.arguments_.length;i++){
    //         if(Blockly.Names.equals(oldName,this.arguments_[i])){
    //             this.arguments_[i]=newName;
    //             this.getField('ARGNAME'+i).setValue(newName);
    //         }
    //     }
    // },
    // onchange:function(event){
    //   if(!this.workspace||this.workspace.isFlyout){
    //       return;
    //   }
    //   if(event.type==Blockly.Events.BLOCK_CREATE&&event.ids.indexOf(this.id)!=-1){
    //       var name=this.getProcedureCall();
    //       var def=Blockly.Procedures.getDefinition(name,this.workspace);
    //       if(def&&(def.type!=this.defType_)||JSON.stringify(def.arguments_)!=JSON.stringify(this.arguments_)){
    //           def=null;
    //       }
    //       if(def){
    //           Blockly.Events.setGroup(event.group);
    //           var xml=goog.dom.createDom('xml');
    //           var block=goog.dom.createDom('block');
    //           block.setAttribute('type',this.defType_);
    //           var xy=this.getRelativeToSurfaceXY();
    //           var x=xy.x+Blockly.SNAP_RADIUS*(this.RTL ? -1 : 1);
    //           var y=xy.y+Blockly.SNAP_RADIUS*2;
    //           block.setAttribute('x',x);
    //           block.setAttribute('y',y);
    //           var mutation=this.mutationToDom();
    //           block.appendChild(mutation);
    //           var field=goog.dom.createDom('field');
    //           field.setAttribute('name','NAME');
    //           field.append(document.createTextNode(this.getProcedureCall()));
    //           block.appendChild(field);
    //           xml.appendChild(block);
    //           Blockly.Xml.domToWorkspace(xml,this.workspace);
    //           Blockly.Events.setGroup(false);
    //
    //       }
    //   }else if(event.type==Blockly.Events.BLOCK_DELETE){
    //       var name=this.getProcedureCall();
    //       var def=Blockly.Procedures.getDefinition(name,this.workspace);
    //       if(!def){
    //           Blockly.Events.setGroup(event.group);
    //           this.dispose(true,false);
    //           Blockly.Events.setGroup(false);
    //       }
    //   }
    // },
    // customContextMenu:function(options){
    //     var option={enabled:true};
    //     option.text=Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
    //     var name=this.getProcedureCall();
    //     var workspace=this.workspace;
    //     option.callback=function(){
    //         var def=Blockly.Procedures.getDefinition(name,workspace);
    //         def&&def.select();
    //     };
    //     options.push(option);
    // },
    // defType_:'def'

};
Blockly.Blocks['def']={
  init:function(){
      this.appendDummyInput().appendField('def');
      this.appendValueInput('func_name').setCheck('String');
      this.appendDummyInput().appendField(' with ');
      this.appendDummyInput().appendField(new Blockly.FieldNumber(0), "param");
      this.appendStatementInput('func_body').setCheck(null);
      this.setInputsInline(true);
      this.setPreviousStatement(true,null);
      this.setNextStatement(true,null);
      this.setColour(350);
      this.setTooltip("defines function");
      this.setHelpUrl("");
      this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
      this.arguments_=[];
      this.hasStatements_=true;
      this.setStatements_(true);
      this.statementConnection_=null;
  },
    setStatements_:function(hasStatements){
      if(this.hasStatements_===hasStatements){
          return;
      }
      if(hasStatements){
          this.appendStatementInput('STACK');
          if(this.getInput('RETURN')){
              this.moveInputBefore('STACK','RETURN');
          }
      }else{
          this.removeInput('STACK',true);
      }
      this.hasStatements_=hasStatements;
    },
    updateParams_:function(){
      var badArg=false;
      var hash={};
      for(var i=0;i<this.arguments_.length;i++){
          if(hash['arg_'+this.arguments_[i].toLowerCase()]){
              badArg=true;
              break;
          }
          hash['arg'+this.arguments_[i].toLowerCase()]=true;
      }
      if(badArg){
          this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
      }else{
          this.setWarningText(null);
      }
      var paramString="";
      if(this.arguments_.length){
          paramString=Blockly.Msg.PROCEDURES_BEFORE_PARAMS+' '+this.arguments_.join(', ');
      }
      Blockly.Events.disable();
      try{
          this.setFieldValue(paramString,'param');
      }finally{
          Blockly.Events.enable();
      }
    },
    mutationToDom:function(opt_paramIds){
      var container=document.createElement('mutation');
      if(opt_paramIds){
          container.setAttribute('func_name',this.getFieldValue('func_name'));
      }
      for(var i=0;i<this.arguments_.length;i++){
          var parameter=document.createElement('arg')
          parameter.setAttribute('func_name',this.arguments_[i]);
          if(opt_paramIds&&this.paramIds_) {
              parameter.setAttribute('paramId', this.paramIds_[i]);
          }
          container.appendChild(parameter);
      }
      if(!this.hasStatements_){
          container.setAttribute('statements','false');
      }
      return container;
    },
    domToMutation:function(xmlElement){
      this.arguments_=[];
      for(var i=0,childNode;childNode=xmlElement;i++){
          if(childNode.nodeName.toLowerCase()=='arg'){
              this.arguments_.push(childNode.getAttribute('func_name'));
          }
      }
      this.updateParams_();
      Blockly.Procedures.mutateCallers(this);
      this.setStatements_(xmlElement.getAttribute('statements')!=='false');
    },
    decompose:function(workspace){
      var containerBlocks=workspace.newBlock('container');
      containerBlocks.initSvg();
      if(this.getInput('RETURN')){
          containerBlocks.setFieldValue(this.hasStatements_ ? 'TRUE':'FALSE','STATEMENTS');
      }else{
          containerBlocks.getInput('STACK').setVisible(false);
      }
      var connection=containerBlocks.getInput('STACK').connection;
      for(var i=0;i<this.arguments_.length;i++){
          var paramBlocks=workspace.newBlocks('procedures_mutatorarg');
          paramBlocks.initSvg();
          paramBlocks.setFieldValue(this.arguments_[i],'STACK');
          paramBlocks.oldLocation=i;
          connection.connect(paramBlocks.previousConnection);
          connection=paramBlocks.nextConnection;

      }
      Blockly.Procedures.mutateCallers(this);
      return containerBlocks;
    },
    compose:function(containerBlocks){
      this.arguments_=[];
      this.paramIds_=[];
      var paramBlocks=containerBlocks.getInputTargetBlock('func_body');
      while(paramBlocks){
          this.arguments_.push(paramBlocks.getFieldValue('func_name'));
          this.paramIds_.push(paramBlocks.id);
          paramBlocks=paramBlocks.nextConnection&&
              paramBlocks.nextConnection.targetBlock();
      }
      this.updateParams_();
      Blockly.Procedures.mutateCallers(this);
      var hasStatements=containerBlocks.getFieldValue('STATEMENTS');
      if(hasStatements!==null){
          hasStatements=hasStatements =='TRUE';
          if(this.hasStatements_!=hasStatements){
              if(hasStatements){
                  this.setStatements_(true);
                  Blockly.Mutator.reconnect(this.statementConnection_,this,'func_body');
                  this.statementConnection_=null;
              }else{
                  var stackConnection=this.getInput('func_body').connection;
                  this.statementConnection_=stackConnection.targetConnection;
                  if(this.statementConnection_){
                      var stackBlocks=stackConnection.targetBlocks();
                      stackBlocks.unplug();
                      stackBlocks.bumpNeighbours_();
                  }
                  this.setStatements_(false);
              }
          }
      }
    },
    getProcedureDef:function(){
      return [this.getFieldValue('NAME'),this.arguments_,false];
    },
    getVars:function(){
      return this.arguments_;
    },
    renameVar:function(oldName,newName){
      var change=false;
      for(var i=0;i<this.arguments_.length;i++){
          if(Blockly.Names.equals(oldName,this.arguments_[i])){
              this.arguments_[i]=newName;
              change=true;
          }
      }
      if(change){
          this.updateParams_();
          if(this.mutator.isVisible()){
              var Blockss=this.mutator.workspace_.getAllBlockss();
              for(var i=0,Blocks;Blocks=Blockss[i];i++){
                  if(Blocks.type=='procedures_mutatorarg'&&Blockly.Names.equals(oldName,Blocks.getFieldValue('NAME'))){
                      Blocks.setFieldValue(newName,'NAME');
                  }

              }
          }
      }
    },
 customContextMenu:function(){
   var option={enabled:true};
   var name=this.getFieldValue('NAME');
   option.text=Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1',name);
   var xmlMutation=goog.dom.createDom('mutation');
   xmlMutation.setAttribute('name',name);
   for(var i=0;i<this.arguments_.length;i++){
       var xmlArg=goog.dom.createDom('arg');
       xmlArg.setAttribute('name',this.arguments_[i]);
       xmlMutation.appendChild(xmlArg);
   }
   var xmlBlocks=goog.dom.createDom('Blocks',null,xmlMutation);
   xmlBlocks.setAttribute('type',this.callType_);
   option.callback=Blockly.ContextMenu.callbackFactory(this,xmlBlocks);
   options.push(option);

   if(!this.isCollapsed()){
       for(var i=0;i<this.arguments_.length;i++){
           var option={enabled:true};
           var name=this.arguments_[i];
           option.text=Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1',name);
           var xmlField=goog.dom.createDom('field',null,name);
           xmlField.setAttribute('name','VAR');
           var xmlBlocks=goog.dom.createDom('Blocks',null,xmlField);
           xmlBlocks.setAttribute('type','variables_get');
           option.callback=Blockly.ContextMenu.callbackFactory(this,xmlBlocks);
           options.push(option);
       }
   }
 },
    callType_:'procedures_callnoreturn'
};