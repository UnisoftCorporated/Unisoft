      function select() {
        $id = $_COOKIE["id"];
      $label = $_COOKIE["label"];
      $cantidad = $_COOKIE["cantidad"];
                // Conectando, seleccionando la base de datos
        $link = mysql_connect("db4free.net:3306/proyectois2016", "proyectois", "proyectois2016")
            or die('No se pudo conectar: ' . mysql_error());
        //echo 'Connected successfully';
        mysql_select_db('proyectois2016') or die('No se pudo seleccionar la base de datos');

        // Realizar una consulta MySQL
        $query = 'UPDATE proyectois SET '.$label.' = '.$cantidad.' WHERE ID = '.$id;
        //echo $query;
        //$query = 'select INBOX from proyectois WHERE ID = 1';
        $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

        // Imprimir los resultados en HTML
        //$line = mysql_fetch_array($result, MYSQL_ASSOC);
        //echo "Resultado: ".mysql_result($result, 0, "INBOX");
        while ($fila = mysql_fetch_assoc($result)) {
          echo $fila[$label];
      }
        mysql_free_result($result);
        mysql_close($link);
    }