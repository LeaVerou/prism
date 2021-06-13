Prism.languages.gamemakerlanguage = Prism.languages.gml = Prism.languages.extend('clike', {
	'keyword': /\b(?:break|case|continue|default|do|else|enum|exit|for|globalvar|if|repeat|return|switch|until|var|while)\b/,
	'number': /(?:\b0x[\da-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ulf]{0,4}/i,
	'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:and|at|not|or|with|xor)\b/,
	'constant': /\b(?:self|other|all|noone|global|local|undefined|pointer_(?:invalid|null)|action_(?:continue|restart|reverse|stop)|pi|GM_build_date|GM_version|timezone_(?:local|utc)|gamespeed_(?:fps|microseconds)|ev_(?:create|destroy|step|alarm|keyboard|mouse|collision|other|draw|draw_(?:begin|end|post|pre)|keypress|keyrelease|trigger|(?:left|middle|no|right)_button|(?:left|middle|right)_press|(?:left|middle|right)_release|mouse_(?:enter|leave|wheel_up|wheel_down)|global_(?:left|middle|right)_button|global_(?:left|middle|right)_press|global_(?:left|middle|right)_release|joystick(?:1|2)_(?:button1|button2|button3|button4|button5|button6|button7|button8|down|left|right|up)|outside|boundary|game_start|game_end|room_start|room_end|no_more_lives|animation_end|end_of_path|no_more_health|user\d|step_(?:begin|end|normal)|gui|gui_begin|gui_end)|vk_(?:nokey|anykey|enter|return|shift|control|alt|escape|space|backspace|tab|pause|printscreen|left|right|up|down|home|end|delete|insert|pageup|pagedown|f\d|numpad\d|divide|multiply|subtract|add|decimal|lshift|lcontrol|lalt|rshift|rcontrol|ralt)|mb_(?:any|left|middle|none|right)|c_(?:aqua|black|blue|dkgray|fuchsia|gray|green|lime|ltgray|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)|fa_(?:archive|bottom|center|directory|hidden|left|middle|readonly|right|sysfile|top|volumeid)|pr_(?:linelist|linestrip|pointlist|trianglefan|trianglelist|trianglestrip)|bm_(?:complex|normal|add|max|subtract|zero|one|src_colour|inv_src_colour|src_color|inv_src_color|src_alpha|inv_src_alpha|dest_alpha|inv_dest_alpha|dest_colour|inv_dest_colour|dest_color|inv_dest_color|src_alpha_sat)|audio_(?:falloff_(?:none|inverse_distance|inverse_distance_clamped|linear_distance|linear_distance_clamped|exponent_distance|exponent_distance_clamped)|old_system|new_system|mono|stereo|3d)|cr_(?:default|none|arrow|cross|beam|size_nesw|size_ns|size_nwse|size_we|uparrow|hourglass|drag|appstart|handpoint|size_all)|spritespeed_framesper(?:second|gameframe)|asset_(?:font|object|path|room|script|shader|sound|sprite|tiles|timeline|unknown)|ds_type_(?:grid|list|map|priority|queue|stack)|ef_(?:cloud|ellipse|explosion|firework|flare|rain|ring|smoke|smokeup|snow|spark|star)|pt_shape_(?:circle|cloud|disk|explosion|flare|line|pixel|ring|smoke|snow|spark|sphere|square|star)|ps_(?:distr|shape)_(?:diamond|ellipse|gaussian|invgaussian|line|linear|rectangle)|ty_(?:real|string)|dll_(?:cdecl|cdel|stdcall)|matrix_(?:projection|view|world)|os_(?:android|ios|linux|macosx|ps3|ps4|psvita|unknown|uwp|win32|win8native|windows|winphone|xboxone)|browser_(?:not_a_browser|unknown|ie|firefox|chrome|safari|safari_mobile|opera|tizen|windows_store|ie_mobile)|device_ios_(?:unknown|iphone|iphone_retina|ipad|ipad_retina|iphone5|iphone6|iphone6plus)|device_(?:emulator|tablet)|display_(?:landscape|landscape_flipped|portrait|portrait_flipped)|of_challenge_(?:lose|tie|win)|leaderboard_type_(?:number|time_mins_secs)|cmpfunc_(?:always|equal|greater|greaterequal|less|lessequal|never|notequal)|cull_(?:clockwise|counterclockwise|noculling)|lighttype_(?:dir|point)|iap_(?:ev_storeload|ev_product|ev_purchase|ev_consume|ev_restore|storeload_ok|storeload_failed|status_uninitialised|status_unavailable|status_loading|status_available|status_processing|status_restoring|failed|unavailable|available|purchased|canceled|refunded)|fb_login_(?:default|fallback_to_webview|no_fallback_to_webview|forcing_webview|use_system_account|forcing_safari)|phy_joint_(?:anchor_1_x|anchor_1_y|anchor_2_x|anchor_2_y|reaction_force_x|reaction_force_y|reaction_torque|motor_speed|angle|motor_torque|max_motor_torque|translation|speed|motor_force|max_motor_force|length_1|length_2|damping_ratio|frequency|lower_angle_limit|upper_angle_limit|angle_limits|max_length|max_torque|max_force)|phy_debug_render_(?:aabb|collision_pairs|coms|core_shapes|joints|obb|shapes)|phy_particle_flag_(?:colormixing|colourmixing|elastic|powder|spring|tensile|viscous|wall|water|zombie)|phy_particle_group_flag_(?:rigid|solid)|phy_particle_data_flag_(?:category|color|colour|position|typeflags|velocity)|achievement_(?:our_info|friends_info|leaderboard_info|info|filter_(?:all_players|friends_only|favorites_only)|type_challenge|type_score_challenge|pic_loaded|show_(?:ui|profile|leaderboard|achievement|bank|friend_picker|purchase_prompt))|network_(?:socket_(?:bluetooth|tcp|udp)|type_(?:connect|disconnect|data|non_blocking_connect)|config_(?:connect_timeout|use_non_blocking_socket|enable_reliable_udp|disable_reliable_udp))|buffer_(?:fixed|grow|wrap|fast|vbuffer|network|u8|s8|u16|s16|u32|s32|u64|f16|f32|f64|bool|text|string|seek_start|seek_relative|seek_end|generalerror|outofspace|outofbounds|invalidtype)|gp_(?:face\d|shoulderl|shoulderr|shoulderlb|shoulderrb|select|start|stickl|stickr|padu|padd|padl|padr|axislh|axislv|axisrh|axisrv)|ov_(?:achievements|community|friends|gamegroup|players|settings)|lb_sort_(?:ascending|descending|none)|lb_disp_(?:none|numeric|time_sec|time_ms)|ugc_(?:result_success|filetype_(?:community|microtrans)|visibility_(?:public|friends_only|private)|query_RankedBy(?:NumTimesReported|PublicationDate|TextSearch|TotalVotesAsc|Trend|Vote|VotesUp)|query_(?:AcceptedForGameRankedByAcceptanceDate|CreatedByFriendsRankedByPublicationDate|FavoritedByFriendsRankedByPublicationDate|NotYetRated)|sortorder_CreationOrder(?:Asc|Desc)|sortorder_(?:ForModeration|LastUpdatedDesc|SubscriptionDateDesc|TitleAsc|VoteScoreDesc)|list_(?:Favorited|Followed|Published|Subscribed|UsedOrPlayed|VotedDown|VotedOn|VotedUp|WillVoteLater)|match_(?:Items|Items_Mtx|Items_ReadyToUse|Collections|Artwork|Videos|Screenshots|AllGuides|WebGuides|IntegratedGuides|UsableInGame|ControllerBindings))|vertex_usage_(?:binormal|blendindices|blendweight|color|colour|depth|fog|normal|position|psize|sample|tangent|texcoord|textcoord)|vertex_type_(?:float\d|colour|color|ubyte4)|layerelementtype_(?:background|instance|oldtilemap|particlesystem|sprite|tile|tilemap|undefined)|tile_(?:rotate|flip|mirror|index_mask)|input_type|se_(?:chorus|compressor|echo|equalizer|flanger|gargle|none|reverb)|text_type|(?:obj|scr|spr|rm)\w+)\b/,
	'variable': /\b(?:x|y|(?:x|y)(?:previous|start)|(?:h|v)speed|direction|speed|friction|gravity|gravity_direction|path_(?:endaction|index|orientation|position|positionprevious|scale|speed)|object_index|id|solid|persistent|mask_index|instance_(?:count|id)|alarm|timeline_(?:index|loop|position|running|speed)|visible|sprite_(?:height|index|width|xoffset|yoffset)|image_(?:alpha|angle|blend|depth|index|number|speed|xscale|yscale)|bbox_(?:bottom|left|right|top)|layer|phy_(?:rotation|(?:position|linear_velocity|speed|com|collision|col_normal)_(?:x|y)|angular_(?:damping|velocity)|position_(?:x|y)previous|speed|linear_damping|bullet|fixed_rotation|active|mass|inertia|dynamic|kinematic|sleeping|collision_points)|working_directory|webgl_enabled|view_(?:(?:h|w|x|y)view|(?:h|w|x|y)port|(?:h|v)(?:border|speed)|visible|surface_id|object|enabled|current|angle)|undefined|transition_(?:color|kind|steps)|temp_directory|show_(?:health|lives|score)|secure_mode|score|room_(?:caption|first|height|last|persistent|speed|width)|room|pointer_(?:invalid|null)|os_(?:browser|device|type|version)|mouse_(?:button|lastbutton|x|y)|lives|keyboard_(?:key|lastchar|lastkey|string)|iap_data|health|gamemaker_(?:pro|registered|version)|game_(?:display|project|save)_(?:id|name)|fps_real|fps|event_(?:action|number|object|type)|error_(?:last|occurred)|display_aa|delta_time|debug_mode|cursor_sprite|current_(?:day|hour|minute|month|second|time|weekday|year)|caption_(?:health|lives|score)|browser_(?:height|width)|background_(?:alpha|blend|color|colour|foreground|height|hspeed|htiled|index|showcolor|showcolour|visible|vspeed|vtiled|width|x|xscale|y|yscale)|async_load|application_surface|argument(?:_relitive|_count|\d)|argument|global|local|self|other)\b/
});
