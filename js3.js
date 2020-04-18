function kola(cole){

    var array = [];

    for(i=1; i <= cole; i++){

        if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){

            array.push("yu-gi-oh");

        }

        else if(i % 2 === 0 && i % 3 === 0){

            array.push("yu-gi");

        }else if(i % 2 === 0 && i % 5 === 0){

            array.push("yu-oh");

        }else if(i % 3 === 0 && i % 5 === 0){

            array.push("gi-oh");

        } else if(i % 2 === 0){

            array.push("yu");

        } else if(i % 3 === 0){

            array.push("gi");

        }

        else if(i % 5 === 0){

            array.push("oh");

        }
		else { 
			array.push(i);
	}
    }

    console.log(array);


}

kola(10);
kola(100);