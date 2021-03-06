{lang;js}
{set;~hor;{if;!=;{get;~hor1};{get;~hor2};true{set;~queen_move;h};false}}
{set;~ver;{if;!=;{get;~ver1};{get;~ver2};true{set;~queen_move;v};false}}
{if;{logic;&&;{get;~hor};{get;~ver}};
	{set;~hor;{math;-;{get;~hor1};{get;~ver1}}}
	{set;~ver;{math;-;{get;~hor2};{get;~ver2}}}
	{if;!=;{get;~hor};{get;~ver};
		:x: Invalid move! You can only move diagonally or straight.
		{return}
	}
	{set;~i_h1;{get;~h1}}
	{set;~i_v1;{get;~v1}}
	{repeat;
		{void;
			{{if;>;{get;~h1};{get;~h2};de;in}crement;~i_h1}
			{{if;>;{get;~v1};{get;~v2};de;in}crement;~i_v1}
		}
		{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~i_v1}};
			{set;~continue;0}
			{set;~exp;piece_obstruct};
		};
		{math;-;{get;~ver1};{get;~ver2};1}
	}
	{if;==;0;{get;~continue};:x: You cannot move your piece here!
		{set;~continue;false}
		{set;~exp;taken_space}
		{return}
	}
	{exec;chess_move_eat;{args}};
	{switch;{get;~queen_move};
		h;
			{if;!=;{get;~v1};{get;~v2};
				:x: FATAL ERROR! Please report to tag creator. `v1 and v2 does not match.`
					{return}
			}
			{set;~i_h1;{get;~hor2}}
			{if;==;{math;-;{get;~hor1};{get;~hor2}};1;
				{set;~continue;true};
				{repeat;
					{void;
						{increment;~i_h1}
					}
					{if;!=;-;{get;@{get;~p}{get;~{get;~i_h1}}{get;~v1}};
						{set;~continue;false}
						{set;~exp;piece_obstruct}
					};
					{math;-;{get;~hor1};{get;~hor2};1}
				}
			}
			{if;==;false;{get;~continue};:x: Invalid move!
				{return}
			}
			{exec;chess_move_eat;{args}}
		v;
			{if;!=;{get;~h1};{get;~h2};
				:x: FATAL ERROR! `h1 and h2 do not match`
				{return}
			}
			{set;~i_v1;{get;~ver2}}
			{if;==;{math;-;{get;~ver1};{get;~ver2}};1;
				{set;~continue;true};
				{repeat;
					{void;
						{increment;~i_v1}
					}
					{if;!=;-;{get;@{get;~p}{get;~{get;~h1}}{get;~i_v1}};
						{set;~continue;false}
						{set;~exp;piece_obstruct};
					};
					{math;-;{get;~ver1};{get;~ver2};1}
				}
			}
			{if;==;false;{get;~continue};:x: Invalid move!
				{return}
			}
			{exec;chess_move_eat;{args}}
	}
}