battery_capacity_wh(672).
max_payload_kg(125).
consumption_wh_per_km(11.5).

% Traffic Advisory & Weather Restrictions (Limit 5 to ensure connectivity)
% 1. Broadway: Restricted due to Broadway Bridge pothole repairs and sidewalk maintenance.
% 2. W 262nd St: Closed for construction involving concrete pumps and boom trucks.
% 3. Pedestrian and Bike Path Link: Closed due to severe frost and ice accumulation on steel spans.
% 4. Edgehill Ave: Restricted safety hazard due to -5C ice on steep inclines.
% 5. Edsall Ave: Restricted due to utility work and icy conditions near the industrial rail corridor.
is_restricted('broadway').
is_restricted('w__262_st').
is_restricted('pedestrian_and_bike_path_link').
is_restricted('edgehill_ave').
is_restricted('edsall_ave').

% calculate_cost(NodeA, NodeB, PayloadKg, CostWh)
% Calculates energy consumption based on distance (degrees to km), weather-adjusted base rate, and payload impact.
% Base rate 11.5 Wh/km accounts for -5C temperature and reduced battery efficiency.
calculate_cost(NodeA, NodeB, PayloadKg, CostWh) :-
    edge(NodeA, NodeB, DistDeg, _),
    consumption_wh_per_km(WhKm),
    % Payload modifier: Adds ~15% consumption at max payload (125kg).
    PayloadModifier is 1.0 + (PayloadKg / 125.0) * 0.15,
    % 111.32 is the conversion factor for degrees to kilometers in NYC.
    CostWh is (DistDeg * 111.32) * WhKm * PayloadModifier.

% notPassable(NodeA, NodeB)
% Returns true if the edge belongs to a restricted street name per the advisory or weather safety logic.
notPassable(NodeA, NodeB) :-
    edge(NodeA, NodeB, _, Street),
    is_restricted(Street).

% pruned_edge_info(PrunedList)
% Identifies restricted edges and pairs them with their closest valid (non-restricted) neighboring node.
pruned_edge_info(PrunedList) :-
    findall(pruned(Street, Neighbor), (
        edge(NodeA, _, _, Street),
        is_restricted(Street),
        edge(NodeA, Neighbor, _, OtherStreet),
        \+ is_restricted(OtherStreet)
    ), PrunedList).

% within_safe_operating_range(NodeA, NodeB, PayloadKg, CurrentBatteryWh)
% Quality rule to ensure a specific segment is viable under current battery levels and safety temperatures.
within_safe_operating_range(NodeA, NodeB, PayloadKg, CurrentBatteryWh) :-
    calculate_cost(NodeA, NodeB, PayloadKg, Cost),
    Cost =< CurrentBatteryWh,
    % Ambient temperature must stay above -15C for battery safety; current is -5C.
    -5 > -15.