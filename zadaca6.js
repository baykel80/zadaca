var hall =[
    {id:1,name:"Dvorana 1",reservation:{isReserved:false,reservedFrom:null,reservedUntil:null}},
    {id:2,name:"Dvorana 2",reservation:{isReserved:true,reservedFrom:new Date(2019, 2, 11, 10),reservedUntil:new Date(2019, 2, 11, 12)}},
    {id:3,name:"Dvorana 3",reservation:{isReserved:true,reservedFrom:new Date(2019, 2, 10, 18),reservedUntil:new Date(2019, 2, 10, 22)}},
    {id:4,name:"Dvorana 4",reservation:{isReserved:false,reservedFrom:null,reservedUntil:null}},
    {id:5,name:"Dvorana 5",reservation:{isReserved:true,reservedFrom:new Date(2019, 2, 12, 18),reservedUntil:new Date(2019, 2, 12, 20)}},
    {id:6,name:"Dvorana 6",reservation:{isReserved:true,reservedFrom:new Date(2019, 2, 14, 18),reservedUntil:new Date(2019, 2, 14, 20)}}
    ];
    
    function add(Name){
        hall[hall.length]={id:hall.length+1,name:Name,reservation:{isReserved:false,reservedFrom:null,reservedUntil:null}};
        return hall;
    }
    
    function remove(ID){
        for(var i=0;i<hall.length;i++){
            if(hall[i].id==ID){
            hall.splice(i,1);
          return hall;
        }
        }
      return hall;
    }
    
    function reservation(ID,ReservedFrom,ReservedUntil){
        for(var i=0;i<hall.length;i++){
            if((hall[i].id==ID) && (hall[i].reservation.reservedFrom==ReservedFrom) && (hall[i].reservation.reservedUntil==ReservedUntil)){
            hall[i].reservation.reservedFrom=new Date(2019, 3, 1, 10);
          hall[i].reservation.reservedUntil=new Date(2019, 3, 1, 20);
          return hall;
        }
        }
      return hall;
    }
    
    function checkReservation(ID){
        var date=new Date();
        for(var i=0;i<hall.length;i++){
          if((hall[i].id==ID) && hall[i].reservation.reservedUntil<date){
            hall[i].reservation.isReserved=false;
            hall[i].reservation.reservedUntil=false;
          hall[i].reservation.reservedFrom=false;
          return hall;
        }
      }
      return hall;
    }