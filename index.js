var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "cloudpixelll",
		password: "oauth:17hb60nfzs1276p0xwhon1650lvj0v",  
	},
	channels: ['#gaules', '#inr1tv', '#marcobc', '#murilo_rt', '#jeffaocs', '#pescocofino', '#csrfps', '#mibrtv', '#marcaorx', '#sheviiioficial', '#brnwowzk1', '#gabepeixe', '#stev3z', '#Vovo', '#furiatv', '#narigafps', '#stereonline', '#skipnho', '#skipnholive', '#saullo', '#mch_agg', '#NOBRU','#sev7n','#smzinho','#cogu', '#dougrrr', '#JonVlogs'] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
