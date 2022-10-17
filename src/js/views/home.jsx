import React, {useEffect, useState} from "react";

const Home = () => {
	const [grid_1, setgrid_1] = useState("")
	const [grid_2, setgrid_2] = useState("")
	const [grid_3, setgrid_3] = useState("")
	const [grid_4, setgrid_4] = useState("")
	const [grid_5, setgrid_5] = useState("")
	const [grid_6, setgrid_6] = useState("")
	const [grid_7, setgrid_7] = useState("")
	const [grid_8, setgrid_8] = useState("")
	const [grid_9, setgrid_9] = useState("")
	
	const [playerOne, set_playerOne] = useState("")
	const [playerTwo, set_playerTwo] = useState("")
	const [player_turn, setPlayer_turn] = useState("O")

	const [visibility_login, setVisibility_login] = useState("show")
	const [visibility_game, setVisibility_game] = useState("hidden")
	const [visibility_result, setVisibility_result] = useState("hidden")

	const [result, setResult] = useState("")
	
	// botones
    const button_X = ()=>{
		if(playerOne != "" && playerTwo != ""){
			// setBin(1)
			setVisibility_game("show")
			setVisibility_login("hidden")
			setPlayer_turn("X")
		}
	}
	const button_O = ()=>{
		if(playerOne != "" && playerTwo != ""){
			// setBin(1)
			setVisibility_game("show")
			setVisibility_login("hidden")
			setPlayer_turn("O")
		}
	}
	const button_back = ()=>{
		// setBin(0)
		setVisibility_game("hidden")
		setVisibility_result("hidden")
		setVisibility_login("show")

		setgrid_1("")
		setgrid_2("")
		setgrid_3("")
		setgrid_4("")
		setgrid_5("")
		setgrid_6("")
		setgrid_7("")
		setgrid_8("")
		setgrid_9("")

		set_playerOne("")
		set_playerTwo("")

		setResult("")
	}

	const button_reset = ()=>{
		setgrid_1("")
		setgrid_2("")
		setgrid_3("")
		setgrid_4("")
		setgrid_5("")
		setgrid_6("")
		setgrid_7("")
		setgrid_8("")
		setgrid_9("")

		setResult("")
	}

	const button_playAgain = ()=>{
		setVisibility_game("show")
		setVisibility_result("hidden")
		setVisibility_login("hidden")

		setgrid_1("")
		setgrid_2("")
		setgrid_3("")
		setgrid_4("")
		setgrid_5("")
		setgrid_6("")
		setgrid_7("")
		setgrid_8("")
		setgrid_9("")

		setResult("")
	}

	function aux_player(player){
		if(player === "X"){
			setPlayer_turn("O")
		}else{
			setPlayer_turn("X")
		}
	}

	function aux_game(num, player){
		switch (num) {
			case "1":
				if(grid_1 === ""){
					setgrid_1(player)
					aux_player(player)
				}
				break;
			case "2":
				if(grid_2 === ""){
					setgrid_2(player)
					aux_player(player)
				}
				break;
			case "3":
				if(grid_3 === ""){
					setgrid_3(player)
					aux_player(player)
				}
				break;
			case "4":
				if(grid_4 === ""){
					setgrid_4(player)
					aux_player(player)
				}
				break;
			case "5":
				if(grid_5 === ""){
					setgrid_5(player)
					aux_player(player)
				}
				break;
			case "6":
				if(grid_6 === ""){
					setgrid_6(player)
					aux_player(player)
				}
				break;
			case "7":
				if(grid_7 === ""){
					setgrid_7(player)
					aux_player(player)
				}
				break;
			case "8":
				if(grid_8 === ""){
					setgrid_8(player)
					aux_player(player)
				}
				break;
			case "9":
				if(grid_9 === ""){
					setgrid_9(player)
					aux_player(player)
				}
				break;
			}
	}

	function aux_game_winX(){
		setResult(`Ha ganado ${playerOne}, X`)
		setVisibility_game("hidden")
		setVisibility_result("show")
		setVisibility_login("hidden")
	}
	function aux_game_winO(){
		setResult(`Ha ganado ${playerTwo}, O`)
		setVisibility_game("hidden")
		setVisibility_result("show")
		setVisibility_login("hidden")
	}
	function aux_game_noWin(){
		setResult(`No hay ganadores! ha terminado en empate!`)
		setVisibility_game("hidden")
		setVisibility_result("show")
		setVisibility_login("hidden")
	}

	// juego
	const game = (num)=>{

		if(player_turn === "X"){
			aux_game(num, player_turn)	
		}else if(player_turn == "O"){
			aux_game(num, player_turn)
		}
	}
	useEffect(()=>{
		if(grid_1 == "X" && grid_2 == "X" && grid_3 == "X"){
			aux_game_winX()
		}else if(grid_1 == "O" && grid_2 == "O" && grid_3 == "O"){
			aux_game_winO()
			//
		}else if(grid_1 == "X" && grid_4 == "X" && grid_7 == "X"){
			aux_game_winX()
		}else if(grid_1 == "O" && grid_4 == "O" && grid_7 == "O"){
			aux_game_winO()
			//
		}else if(grid_1 == "X" && grid_5 == "X" && grid_9 == "X"){
			aux_game_winX()
		}else if(grid_1 == "O" && grid_5 == "O" && grid_9 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_1])
	useEffect(()=>{
		if(grid_2 == "X" && grid_1 == "X" && grid_3 == "X"){
			aux_game_winX()
		}else if(grid_2 == "O" && grid_1 == "O" && grid_3 == "O"){
			aux_game_winO()
			//
		}else if(grid_2 == "X" && grid_5 == "X" && grid_8 == "X"){
			aux_game_winX()
		}else if(grid_2 == "O" && grid_5 == "O" && grid_8 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_2])
	useEffect(()=>{
		if(grid_3 == "X" && grid_2 == "X" && grid_1 == "X"){
			aux_game_winX()
		}else if(grid_3 == "O" && grid_2 == "O" && grid_1 == "O"){
			aux_game_winO()
			//
		}else if(grid_3 == "X" && grid_6 == "X" && grid_9 == "X"){
			aux_game_winX()
		}else if(grid_3 == "O" && grid_6 == "O" && grid_9 == "O"){
			aux_game_winO()
			//
		}else if(grid_3 == "X" && grid_5 == "X" && grid_7 == "X"){
			aux_game_winX()
		}else if(grid_3 == "O" && grid_5 == "O" && grid_7 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_3])
	useEffect(()=>{
		if(grid_4 == "X" && grid_1 == "X" && grid_7 == "X"){
			aux_game_winX()
		}else if(grid_4 == "O" && grid_1 == "O" && grid_7 == "O"){
			aux_game_winO()
			//
		}else if(grid_4 == "X" && grid_5 == "X" && grid_6 == "X"){
			aux_game_winX()
		}else if(grid_4 == "O" && grid_5 == "O" && grid_6 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_4])
	useEffect(()=>{
		if(grid_5 == "X" && grid_4 == "X" && grid_6 == "X"){
			aux_game_winX()
		}else if(grid_5 == "O" && grid_4 == "O" && grid_6 == "O"){
			aux_game_winO()
			//
		}else if(grid_5 == "X" && grid_2 == "X" && grid_8 == "X"){
			aux_game_winX()
		}else if(grid_5 == "O" && grid_2 == "O" && grid_8 == "O"){
			aux_game_winO()
			//
		}else if(grid_5 == "X" && grid_1 == "X" && grid_9 == "X"){
			aux_game_winX()
		}else if(grid_5 == "O" && grid_1 == "O" && grid_9 == "O"){
			aux_game_winO()
			//
		}else if(grid_5 == "X" && grid_3 == "X" && grid_7 == "X"){
			aux_game_winX()
		}else if(grid_5 == "O" && grid_3 == "O" && grid_7 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_5])
	useEffect(()=>{
		if(grid_6 == "X" && grid_9 == "X" && grid_3 == "X"){
			aux_game_winX()
		}else if(grid_6 == "O" && grid_9 == "O" && grid_3 == "O"){
			aux_game_winO()
			//
		}else if(grid_6 == "X" && grid_5 == "X" && grid_4 == "X"){
			aux_game_winX()
		}else if(grid_6 == "O" && grid_5 == "O" && grid_4 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_6])
	useEffect(()=>{
		if(grid_7 == "X" && grid_1 == "X" && grid_4 == "X"){
			aux_game_winX()
		}else if(grid_7 == "O" && grid_1 == "O" && grid_4 == "O"){
			aux_game_winO()
			//
		}else if(grid_7 == "X" && grid_8 == "X" && grid_9 == "X"){
			aux_game_winX()
		}else if(grid_7 == "O" && grid_8 == "O" && grid_9 == "O"){
			aux_game_winO()
			//
		}else if(grid_7 == "X" && grid_5 == "X" && grid_3 == "X"){
			aux_game_winX()
		}else if(grid_7 == "O" && grid_5 == "O" && grid_3 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_7])
	useEffect(()=>{
		if(grid_8 == "X" && grid_9 == "X" && grid_7 == "X"){
			aux_game_winX()
		}else if(grid_8 == "O" && grid_9 == "O" && grid_7 == "O"){
			aux_game_winO()
			//
		}else if(grid_8 == "X" && grid_2 == "X" && grid_5 == "X"){
			aux_game_winX()
		}else if(grid_8 == "O" && grid_2 == "O" && grid_5 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_8])
	useEffect(()=>{
		if(grid_9 == "X" && grid_3 == "X" && grid_6 == "X"){
			aux_game_winX()
		}else if(grid_9 == "O" && grid_3 == "O" && grid_6 == "O"){
			aux_game_winO()
			//
		}else if(grid_9 == "X" && grid_8 == "X" && grid_7 == "X"){
			aux_game_winX()
		}else if(grid_9 == "O" && grid_8 == "O" && grid_7 == "O"){
			aux_game_winO()
			//
		}else if(grid_9 == "X" && grid_5 == "X" && grid_1 == "X"){
			aux_game_winX()
		}else if(grid_9 == "O" && grid_5 == "O" && grid_1 == "O"){
			aux_game_winO()
		}else if(grid_1 != "" && grid_2 != "" && grid_3 != "" && grid_4 != "" && grid_5 != "" && grid_6 != "" && grid_7 != "" && grid_8 != "" && grid_9 != ""){
			aux_game_noWin()
		}
	}, [grid_9])

	return (
		
		<div style={{minHeight:"667px", minWidth:"1115px"}}>
		
			<div className="d-flex flex-column text-center mt-1">

				<h1 className="mb-4">Tic Tac Toe in React.js</h1>

			</div>

			{/* pantalla del inicio */}
			<div className={visibility_login}>
				<h3 className="text-center">Pick A Weapon</h3>
				<div className="d-flex justify-content-center mt-5" style={{height:"300px", width:"100%"}}>
		
					<div className="d-flex flex-column text-center" style={{background:"#F97F51", borderRadius:"15px", width:"60%"}}>
						<h2 className="my-3">CHOOSE YOUR WEAPON</h2>
		
						<div className="d-flex justify-content-center align my-2">
							<input onChange={(e)=>set_playerOne(e.target.value)} value={playerOne} type="text" className="form-control mx-1" placeholder="Player 1 username" style={{width:"unset"}} />
							<input onChange={(e)=>set_playerTwo(e.target.value)} value={playerTwo} type="text" className="form-control mx-1" placeholder="Player 2 username" style={{width:"unset"}} />
						</div>
		
						<div className="mt-4">
							<button onClick={()=>button_X()} className="btn mx-4" style={{background:"#f0932b", fontSize:"50px", height: "100px", width:"100px"}}>X</button>
							<button onClick={()=>button_O()} className="btn mx-4" style={{background:"#f0932b", fontSize:"50px", height: "100px", width:"100px"}}>O</button>
						</div>
		
					</div>
		
				</div>
			</div>

			{/* pantalla del juego */}
			<div className={visibility_game}>
	
				<h3 className="text-center">It is {player_turn} turn!</h3>
		
				<div className="mt-3" style={{height:"300px", width:"100%"}}>
		
					<div className="container text-center" style={{background:"#F97F51", borderRadius:"15px", width:"60%"}}>
						
						{/* top */}
						<div className="row">
							<div onClick={()=>game("1")} className="col d-flex align-items-center justify-content-center" style={{borderBottom:"1px solid black", height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_1}
							</div>
							<div onClick={()=>game("2")} className="col d-flex align-items-center justify-content-center" style={{borderRight:"1px solid black", borderLeft:"1px solid black", borderBottom:"1px solid black", height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_2}
							</div>
							<div onClick={()=>game("3")} className="col d-flex align-items-center justify-content-center" style={{borderBottom:"1px solid black", height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_3}
							</div>
						</div>
		
						{/* center */}
						<div className="row">
							<div onClick={()=>game("4")} className="col d-flex align-items-center justify-content-center" style={{height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_4}
							</div>
							<div onClick={()=>game("5")} className="col d-flex align-items-center justify-content-center" style={{borderRight:"1px solid black", borderLeft:"1px solid black", height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_5}
							</div>
							<div onClick={()=>game("6")} className="col d-flex align-items-center justify-content-center" style={{height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_6}
							</div>
						</div>
		
		
						{/* bottom */}
						<div className="row">
							<div onClick={()=>game("7")} className="col d-flex align-items-center justify-content-center" style={{borderTop:"1px solid black", height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_7}
							</div>
							<div onClick={()=>game("8")} className="col d-flex align-items-center justify-content-center" style={{borderRight:"1px solid black", borderLeft:"1px solid black", borderTop:"1px solid black", height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_8}
							</div>
							<div onClick={()=>game("9")} className="col d-flex align-items-center justify-content-center" style={{borderTop:"1px solid black", height:"150px", width:"100px", fontSize: "40px"}}>
								{grid_9}
							</div>
						</div>
		
					</div>
					
					<br />
					<div className="d-flex flex-column align-items-center mb-2 " style={{width:"100%"}}>
						<div className="d-flex justify-content-center p-3" style={{background:"#fab1a0", width:"40%", borderRadius:"10px"}}>
							<button onClick={()=>button_back()} className="btn btn-secondary mx-2">Back</button>
							<button onClick={()=>button_reset()} className="btn btn-danger mx-2">Reset</button>
						</div>
						<br className="p-3"/>
					</div>
				</div>
			</div>

			{/* pantalla resultados */}
			<div className={visibility_result}>

				<h3 className="text-center">			
					{result}
				</h3>
				<div className="d-flex justify-content-center mt-5" style={{width:"100%"}}>

					<button onClick={()=>button_back()} className="btn btn-secondary mx-2">Back</button>

					<button onClick={()=>button_playAgain()} className="btn btn-success mx-2">Play Again</button>
				
				</div>


			</div>

					
		
		</div>

);
};

export default Home;
