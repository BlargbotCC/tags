t!t edit marry {if;==;{userid};{aget;bl};{aget;perr17};{aset;{userid}proposed;{if;==;{args;0};cancel;0;{aget;{userid}proposed}}}{aset;{userid;{aget;{userid}propose}}propose;{if;==;{args;0};cancel;0;{if;==;deny;{args;0};{if;==;1;{aget{userid}proby};0;{aget;{userid;{aget;{userid}propose}}propose}};{aget;{userid;{aget;{userid}propose}}propose}}}}{aset;{userid}propose;{if;==;{args;0};cancel;0;{if;==;deny;{args;0};{if;==;1;{aget;{userid}proby};0;{aget;{userid}propose}};{aget;{userid}propose}}}}{aset;{userid}time;{time;x;now}}{aset;{userid}omarrmath;{aget;{userid}marrmath}}{aset;{userid}marrmath;{math;+;{aget;{userid}time};{aget;1mo}}}{aset;{userid}marelig;{if;==;1;{aget;{userid}status};0;{if;==;1;{aget;{userid;{aget;{userid}propose}}status};0;{if;==;cancel;{args;0};0;{if;==;0;{aget;{userid}proby};0;{if;==;{args;0};deny;0;{if;==;{args;0};accept;1;0}}}}}}}{if;==;1;{aget;{userid}status};{aget;marer1};{if;==;{args;0};cancel;{aget;marer2};{if;==;{aget;{userid}proposed};1;:x: | You can't answer your own proposal!;{if;==;1;{aget;{userid}proby};{if;==;deny;{args;0};:broken_heart: | Denied the proposal!;{if;==;accept;{args;0};:wedding: | {username}, you are now wed with <@{aget;{userid}propose}>;:x: | Invalid!}};{get;marerm}}}}}{aset;{userid}status;{if;==;1;{aget;{userid}marelig};1;{aget;{userid}status}}}{aset;{userid;{aget;{userid}propose}}status;{if;==;1;{aget;{userid}marelig};1;{aget;{userid;{aget;{userid}propose}}status}}}{aset;{userid}marrmath;{if;==;0;{aget;{userid}marelig};{aget;{userid}omarrmath};{aget;{userid}marrmath}}}{aset;{aget;{userid}propose}marrmath;{if;==;0;{aget;{userid}marelig};{aget;{userid}omarrmath};{aget;{userid}marrmath}}}{aset;{userid}partner;{if;==;1;{aget;{userid}marelig};{aget;{userid}propose};{aget;{userid}partner}}}{aset;{aget;{userid}propose}partner;{if;==;1;{aget;{userid}marelig};{userid};{aget;{aget;{userid}propose}partner}}}{aset;{userid}proby;{if;==;1;{aget;{userid}marelig};0;{if;==;deny;{args;0};0;{aget;{userid}proby}}}}}