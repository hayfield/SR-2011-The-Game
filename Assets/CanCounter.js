
static var cansOnBoard = 0;
static var hasSuperToken = false;

function OnTriggerEnter (other : Collider) {
    if( other.name == "Tin Can" || other.name == "Tin Can Super"){
		cansOnBoard++;
	}
	if(other.name == "Tin Can Super"){
		hasSuperToken = true;
	}
}

function OnTriggerExit (other : Collider) {
    if( other.name == "Tin Can" || other.name == "Tin Can Super"){
		cansOnBoard--;
	}
	if(other.name == "Tin Can Super"){
		hasSuperToken = false;
	}
}