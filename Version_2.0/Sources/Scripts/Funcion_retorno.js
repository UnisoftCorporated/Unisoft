	}
			function perfil() {                
                    var request = gapi.client.gmail.users.getProfile({
                        'userId': 'me'
                    });
                    request.execute(function (resp) {
						var email = resp.emailAddress
						usuario = email;
                    });
                
            }
			
			function asignacion(labelIds,query) {
				var request = gapi.client.gmail.users.messages.list({
					'userId': 'me',  				
					'q': query,
					'labelIds':labelIds				
				});
				
			request.execute(function(response) {
			$.each(response.messages, function() {
            var messageRequest = gapi.client.gmail.users.messages.modify({
              'userId': 'me',			  
              'id': this.id,
			  'addLabelIds': ['Label_5']
            });
            messageRequest.execute();
			});
			});
			}
			
			function filtro(labelIds,query){				
				var request = gapi.client.gmail.users.messages.list({
					'userId': 'me',  				
					'q': query,
					'labelIds':labelIds
				});						
			return request.execute(function (resp){
			var messages = resp.messages;
			var cant = messages.length;
			conteo(cant,labelIds,query);
			});				
			}	

			function conteo (cant,labelIds,query) {							
				var cantidad = cant;				
				alert("usuario "+usuario+" integrante : "+query+ " label : "+labelIds + " cantidad : "+cantidad);			
				comprobar(usuario,cantidad,labelIds);
			return cantidad;
			}	
			
			function comprobar (user,cant,etiqueta){
			var asigna = user +" "+ cant +" "+etiqueta;
			//document.write(+asigna);
			return cant;
			}	
					
			}
