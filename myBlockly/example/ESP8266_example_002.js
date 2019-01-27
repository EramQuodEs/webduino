﻿var ESP8266_example_002 = '<xml xmlns="http://www.w3.org/1999/xhtml"><variables><variable type="" id="+Oog~D)0D,I*Y5(g]2r1">TimerESP8266</variable><variable type="" id="ij_ZS;5L7fPB{t3^~CEl">data</variable></variables><block type="comment" id="d|Z5TmEgk;,e%_2cp-G9" x="53" y="-29"><value name="text"><block type="text" id="xB_dZRO*bprp]:8509Q7"><field name="TEXT">Nodemcu (ESP12E) v2 Lcd1602 I2C</field></block></value><next><block type="comment" id="%y[]]HoaTB:9c]!PhaLJ"><value name="text"><block type="text" id="nyTEh#Jk!cE+Qs}yE/|L"><field name="TEXT">Library: https://github.com/fdebrabander/Arduino-LiquidCrystal-I2C-library</field></block></value><next><block type="comment" id="8CUM.!Miv%N5~C};YyuU"><value name="text"><block type="text" id="L.wR1Uoqm*H]A!QoVME["><field name="TEXT">Firmware: https://github.com/fustyles/Arduino/blob/master/ESP12E_MyBlockly_JSON.ino</field></block></value><next><block type="comment" id="uW}9Y+aXxVR.-VH|49/["><value name="text"><block type="text" id="9~-d9|KK@5ldwZZ(9BV*"><field name="TEXT">Nodemcu (ESP32) Lcd1602 I2C</field></block></value><next><block type="comment" id="`*bxID@osg+@-p,x@+Jz"><value name="text"><block type="text" id="!/$LuzR$LaIl|X@euXhs"><field name="TEXT">Library: https://github.com/nhatuan84/esp32-lcd</field></block></value><next><block type="comment" id="GjSoFKV3Vk5_s%`E_y_z"><value name="text"><block type="text" id="~v#8asPT!fy@?GF,=D)Z"><field name="TEXT">Firmware: https://github.com/fustyles/Arduino/blob/master/ESP32_MyBlockly_JSON.ino</field></block></value><next><block type="esp8266_custom" id="bY(e,bTQSv#fQfbWGbSl"><value name="url"><block type="text" id="Olx|q[1bo=TV_|_Tf}9#"><field name="TEXT">http://192.168.201.17</field></block></value><value name="cmd"><block type="esp8266_cmd" id="YoV9F:mrR0p0ZFlO{df2"><field name="cmd">linenotify</field></block></value><value name="P1"><block type="text" id="-SS*BW_VxE}%w@yYyVj]"><field name="TEXT">xxxxxxxxxxxxxxxxxxxxxx</field></block></value><value name="P2"><block type="text_join" id="Z@YQ^CVmrscs,W9d.kX,"><mutation items="5"></mutation><value name="ADD0"><block type="text" id="6;8tuCj`91qIQ{YgJwFq"><field name="TEXT">message=Hello,&lt;BR /&gt;Taiwan</field></block></value><value name="ADD1"><block type="text" id="R*UnHS72r_*yrKhr%7-y" disabled="true"><field name="TEXT">&amp;</field></block></value><value name="ADD2"><block type="text" id="s3+j4m+48lv64}%14g=t" disabled="true"><field name="TEXT">stickerPackageId=1</field></block></value><value name="ADD3"><block type="text" id="dIeFtBHB}FSChtdFgtxF" disabled="true"><field name="TEXT">&amp;</field></block></value><value name="ADD4"><block type="text" id="$`nv7_kD7(*,oV:[_;3w" disabled="true"><field name="TEXT">stickerId=2</field></block></value></block></value><value name="P3"><block type="text" id="CN,1:;N5OVqYhg;l*+G5"><field name="TEXT"></field></block></value><value name="P4"><block type="text" id="UH-lY)}1H)QP8WXeI7_A"><field name="TEXT"></field></block></value><value name="P5"><block type="text" id="uSn4F,}+aMc8;r8{mX1i"><field name="TEXT"></field></block></value><value name="P6"><block type="text" id="mvaM`7x_0YMN~a7r![i)"><field name="TEXT"></field></block></value><value name="P7"><block type="text" id="x,iB35Gm*^ueX3lor40c"><field name="TEXT"></field></block></value><value name="P8"><block type="text" id="N|tpxIHy;06~olZuB,Jx"><field name="TEXT"></field></block></value><value name="P9"><block type="text" id="GC~/DPlxK{Kc%W{D~nlk"><field name="TEXT"></field></block></value><next><block type="document_timer" id="mi/z6I4OGW!r-?w:dktl"><field name="fuTimer_" id="+Oog~D)0D,I*Y5(g]2r1" variabletype="">TimerESP8266</field><value name="intervals_"><block type="math_number" id=";yP~x1l8Ovs6JfUe6u0C"><field name="NUM">10</field></block></value><statement name="do_"><block type="variables_set" id="Sh:0%7~`mHXezT$HAE*w"><field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field><value name="VALUE"><block type="esp8266_getresponse" id="KE3ci[=9F6s6fOnlqASf"></block></value><next><block type="controls_if" id="vCdY_~2dFg|G,/k{UWg5"><value name="IF0"><block type="logic_compare" id="YL}`$R773p0-rd0KeDXi"><field name="OP">NEQ</field><value name="A"><block type="variables_get" id="n`nGC!6DbH`*#Q;zW!(!"><field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field></block></value><value name="B"><block type="text" id="EDFdfPMe4+b)[!Jlr/|a"><field name="TEXT"></field></block></value></block></value><statement name="DO0"><block type="showtext" id="|C`eK;cgFYiFEd`4x$k^"><value name="size"><block type="math_number" id="-2wzQlhvPP^}uX38q`9D"><field name="NUM">12</field></block></value><value name="color"><block type="colour_picker" id="UCkt++5[6K794@vmhL@s"><field name="COLOUR">#000000</field></block></value><value name="text"><block type="text_join" id="XHwG-aEbt7Eyl_FJ#=dx"><mutation items="3"></mutation><value name="ADD0"><block type="lists_getIndex" id="OJ-EB+39{;@eX{}C^YOt"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get" id="l*iy(p,5.J@/q^6}cbut"><field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field></block></value><value name="AT"><block type="math_number" id="_.{pa@D^s@j~#/)^Y;T%"><field name="NUM">1</field></block></value></block></value><value name="ADD1"><block type="linebreak" id="2(Qj$)uXch-Z=4}o;h|i"></block></value><value name="ADD2"><block type="lists_getIndex" id="ToL)##Eq?:4hs:*)mc!}"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get" id="2,mXX|W`uFazCYb29]zI"><field name="VAR" id="ij_ZS;5L7fPB{t3^~CEl" variabletype="">data</field></block></value><value name="AT"><block type="math_number" id=",?|_M}SI0zJ{?}C{h06("><field name="NUM">2</field></block></value></block></value></block></value></block></statement></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>';