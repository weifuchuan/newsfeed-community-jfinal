package com.fuchuan.nsc.remind;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;
import com.jfinal.kit.PropKit;

public class RemindSockIOServer {
	private final SocketIOServer server;

	public RemindSockIOServer() {
		Configuration config = new Configuration();
		config.setHostname("localhost");
		config.setPort(9092);
		server = new SocketIOServer(config);
		
		
	}

	public void start() {
		server.start();
	}

	public void stop() {
		server.stop();
	}
}
