var catThingSpeak = '<xml><category name="%{BKY_THINGSPEAK}" colour="%{BKY_THINGSPEAK_HUE}">'+
'  <block type="thingspeak_update">'+
'    <value name="key">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="field1">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="field2">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="field3">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="field4">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="field5">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="field6">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="field7">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'    <value name="field8">'+
'      <block type="math_number">'+
'        <field name="NUM">0</field>'+
'      </block>'+
'    </value>'+
'  </block>'+        
'  <block type="thingspeak_read1">'+
'    <value name="key">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="count">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+        
'  <block type="thingspeak_read2">'+
'    <value name="key">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'    <value name="field">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'    <value name="count">'+
'      <block type="math_number">'+
'        <field name="NUM">1</field>'+
'      </block>'+
'    </value>'+
'  </block>'+  
'  <block type="thingspeak_read3">'+
'    <value name="key">'+
'      <block type="text">'+
'        <field name="TEXT"></field>'+
'      </block>'+
'    </value>'+
'  </block>'+ 
'  <variables>'+
'  <variable type="" id="+Oog~D)0D,I*Y5(g]2r1">TimerThingSpeak</variable>'+
'  <variable type="" id="ij_ZS;5L7fPB{t3^~CEl">data</variable></variables>'+
'  <block type="document_timer" id="mi/z6I4OGW!r-?w:dktl" x="-100" y="482">'+
'    <field name="fuTimer_" id="+Oog~D)0D,I*Y5(g]2r1" variabletype="">TimerThingSpeak</field>'+
'    <value name="intervals_"><block type="math_number" id=";yP~x1l8Ovs6JfUe6u0C">'+
'      <field name="NUM">10</field></block>'+
'    </value>'+
'    <statement name="do_">'+
'      <block type="variables_set" id="Sh:0%7~`mHXezT$HAE*w">'+
'        <field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field>'+
'        <value name="VALUE">'+
'          <block type="thingspeak_getresponse" id="2=MKa(/Y+!|LRUC=mwdG"></block>'+
'        </value>'+
'      </block>'+
'    </statement>'+
'  </block>'+
'  <block type="thingspeak_clearresponse">'+ 
'  </block>'+      
' </category></xml>';
