//http://www.unifycommunity.com/wiki/index.php?title=PhysicsFPSWalker

// These variables are for adjusting in the inspector how the object behaves 
var maxSpeed = 2.000;
var force = 30.000;
var rotations = 2.000;

// Don't let the Physics Engine rotate this physics object so it doesn't fall over when running
function Awake ()
{ 
    rigidbody.freezeRotation = true;
}

// This is called every physics frame
function FixedUpdate ()
{
    // Get the input and set variables for it
    horizontal = Input.GetAxis("Horizontal"); 
    vertical = Input.GetAxis("Vertical"); 

    // Set the movement input to be the force to apply to the player every frame
    horizontal *= rotations;
    vertical *= force;

    // If the object is grounded and isn't moving at the max speed or higher apply force to move it
    if(rigidbody.velocity.magnitude < maxSpeed)
    {
        rigidbody.AddForce (transform.rotation * Vector3.forward * vertical);
        //rigidbody.AddForce (transform.rotation * Vector3.right * horizontal);
    }
	transform.Rotate(transform.rotation * Vector3.up * horizontal);

 } 
