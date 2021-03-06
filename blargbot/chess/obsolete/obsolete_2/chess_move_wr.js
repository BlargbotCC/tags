{lang;js}
{set;~hor;{if;!=;{get;~hor1};{get;~hor2};true{set;~rook_move;h};false}}
{set;~ver;{if;!=;{get;~ver1};{get;~ver2};true{set;~rook_move;v};false}}
{if;{logic;&&;{get;~hor};{get;~ver}};
	:x: Invalid move! Rooks can only move horizontally or vertically, it cannot be both.
	{return};
	{void}
}
{switch;{get;~rook_move};
	h;
		{if;!=;{get;~v1};{get;~v2};
			:x: FATAL ERROR! `v1 and v2 do not match`
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
		{exec;chess_move_eat;{args}};
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
{if;==;true;{get;~move_success};
	{switch;{get;~mv1};
		a1;{set;@{get;~p}unmoved$R_a1;0};
		h1;{set;@{get;~p}unmoved$R_h1;0};
	}
}