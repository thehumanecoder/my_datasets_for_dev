const data = {
    "id": "qwerty1234567",
    "question": "How to dynamically change border color in next js with tailwind css?",
    "description": [{
            'type': 'text',
            'description': 'I am trying to change the border color of my email input dynamically in the state of valid or invalid email id. I have written the following method but it is not working as expected , as we can say it is not working at all . Any workaround to do that .',
        },
        {
            'type': 'code',
            'description': `import { useState } from 'react'; 
      import Image from 'next/image';
      
      const NavItem = props =>(
          <li>
            <a className="text-md font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300" href={props.href}>{props.text}</a>
          </li>kalahansa kedara
        );
      
      export default function Post() {
        const [validEmail,setvalidEmail] = useState(true);
      
        return (
            <div>
                 <nav className="flex justify-between p-4" >
            <div className="">
            <Image
            src="/media/logonew.png"
            alt="logo"
            width={180}
            height={40}
            />
            </div>
            <div>
            <ul className="flex space-x-3 py-2 px-3">
            <NavItem  href="/" text="Home"/>
                <NavItem  href="/products" text="Products"/>
                <NavItem href="/eligibility" text="Eligibility"/>
                <NavItem href="/login" text="Login"/>
                <NavItem href="/faq" text="FAQ"/>
              </ul>
            </div>
              
            </nav>
      
            <div className="conatiner mx-auto max-w-xl mt-10">
              <div className="text-center md:flex md:text-left  shadow-sm">
                  <div className="border text-center p-5 rounded-xl">
                      <h2 className="text-6xl text-blue-600 m-5 font-semibold">Register</h2>
                      <form onSubmit={()=>{}} className="text-left">
                          <p className="text-blue-600 font-semibold">Email</p>
                          <input type="text" placeholder="Enter your email id" className="bg-white rounded border border-gray-300 p-3 focus:border validEmail?focus:border-blue-600:border-red-600 my-2 w-full"/>
                          <p className="text-blue-600 font-semibold">Password</p>
                          <input type="password" placeholder="Enter your password" className="bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600  my-2 w-full"/>
                          <p className="text-blue-600 font-semibold">Confirm Password</p>
                          <input type="password" placeholder="Confirm your password" className="bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600  my-2 w-full"/>
                          <p className="text-blue-600 font-semibold">Full name</p>
                          <input type="text" placeholder="Enter your full name" className="bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600  my-2 w-full"/>
                          <p className="text-blue-600 font-semibold">Date of birth</p>
                          <input type="date" placeholder="Enter your password" className="bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600  my-2 w-full"/>
                          <p className="text-blue-600 font-semibold">Organization Name <span className="text-gray-500">*Optional</span></p>
                          <input type="Text" placeholder="Enter your password" className="bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600  my-2 w-full"/>
      
                          <button type="submit" className="bg-blue-600 text-white p-3 rounded my-3 font-bold text-xl w-full">Register</button>
                      </form>
                  </div>
              </div>
            </div>
            </div>
        )
      }
      `
        },
        {
            'type': 'text',
            'description': 'Thanks in advance for helping me out .'
        }
    ],
    'tags': ['reactjs', 'nextjs', 'tailwindcss'],
    'details': {
        'views': '1200',
        'solutioned': true,
        'upvotes': '124',
        'downvotes': '23',
        'active': false
    },
    'user': {
        'id': 'qwsde1234',
        'name': 'Biswas Sampad',
        'profile_pic': '/public/john_doe.jpeg',
        'score': 7.2,
        'trophies': 399
    },
    'time': {
        'created_at': '21.06.2021 16.03'
    },
    'answers': [{
        'id': 'qwerty1245',
        'description': [{
                'type': 'text',
                'description': 'I managed to find that you are trying to change your className value here : <input type="text" placeholder="Enter your email id" className="bg-white rounded border border-gray-300 p-3 focus:border validEmail?focus:border-blue-600:border-red-600 my-2 w-full"/>'
            },
            {
                'type': 'text',
                'description': 'With conditional operator you can achieve this with something like this :'
            },
            {
                'type': 'code',
                'description': `
          function post() {
            const [validEmail,setvalidEmail] = useState(true);
            const validEmailClass = "bg-white rounded border border-gray-300 p-3 focus:border focus:border-blue-600 my-2 w-full";
            const invalidEmailClass = "bg-white rounded border border-gray-300 p-3 focus:border border-red-600 my-2 w-full";
           
          
          return (
            ...
            <input type="text" placeholder="Enter your email id" className={validEmail ?  validEmailClass : invalidEmailClass}/>
            ...
          );
          }`
            }
        ],
        'votes': {
            'upvote': 12,
            'down': 4
        },
        'user': {
            'id': 'qwsde1234',
            'name': 'Biswas Sampad',
            'profile_pic': '/public/john_doe.jpeg',
            'score': 7.2,
            'trophies': 399
        },
        'time': {
            'created_at': '21.06.2021 16.03'
        },
        'isSolution': true
    }]
}