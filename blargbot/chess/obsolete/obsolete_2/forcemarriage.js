t!t edit forcemarriage {set;0;{userid;{args;0}}}{set;1;{if;==;;{args;1};{userid};{userid;{args;1}}}}{if;!=;1;{aget;{userid}admin};:x: Wtfook;Forced {username;{get;0}} and {username;{get;1}}}{aset;{get;1}status;{if;!=;1;{aget;{userid}admin};{aget;{get;1}status};1}}{aset;{get;0}status;{if;!=;1;{aget;{userid}admin};{aget;{get;0}status};1}}{aset;{get;1}partner;{if;!=;1;{aget;{userid}admin};{aget;{get;1}status};{get;0}}}{aset;{get;0}partner;{if;!=;1;{aget;{userid}admin};{aget;{get;0}status};{get;1}}}