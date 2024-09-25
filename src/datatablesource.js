
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field  :  "user", headerName : "User", width : 230, renderCell : (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field : "email", headerName : "Email", width :230
    },
    {
        field : "age", headerName : "Age", width :100

    },
    {
        field : "status", 
        headerName : "Status", 
        width :160,
        renderCell : (params) => {
            return  (
                <div className={`cellWithStatus ${params.row.status}`}>
                   {params.row.status}
                </div>
            )
        }

    }

]

export const UserRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://via.placeholder.com/150",
        status: "active",
        email: "snow@example.com",
        age: 21
    },
    {
        id: 2,
        username: "Lannister",
        img: "https://via.placeholder.com/150",
        status: "active",
        email: "lannister@example.com",
        age: 34
    },
    {
        id: 3,
        username: "Stark",
        img: "https://via.placeholder.com/150",
        status: "inactive",
        email: "stark@example.com",
        age: 28
    },
    {
        id: 4,
        username: "Targaryen",
        img: "https://via.placeholder.com/150",
        status: "pending",
        email: "targaryen@example.com",
        age: 30
    },
    {
        id: 5,
        username: "Greyjoy",
        img: "https://via.placeholder.com/150",
        status: "inactive",
        email: "greyjoy@example.com",
        age: 27
    },
    {
        id: 6,
        username: "Baratheon",
        img: "https://via.placeholder.com/150",
        status: "pending",
        email: "baratheon@example.com",
        age: 32
    },
    {
        id: 7,
        username: "Martell",
        img: "https://via.placeholder.com/150",
        status: "active",
        email: "martell@example.com",
        age: 29
    },
    {
        id: 8,
        username: "Tyrell",
        img: "https://via.placeholder.com/150",
        status: "inactive",
        email: "tyrell@example.com",
        age: 26
    },
    {
        id: 9,
        username: "Tyrell",
        img: "https://via.placeholder.com/150",
        status: "inactive",
        email: "tyrell@example.com",
        age: 26
    },
    {
        id: 10,
        username: "Tyrell",
        img: "https://via.placeholder.com/150",
        status: "inactive",
        email: "tyrell@example.com",
        age: 26
    },
    {
        id: 11,
        username: "Tyrell",
        img: "https://via.placeholder.com/150",
        status: "inactive",
        email: "tyrell@example.com",
        age: 26
    },
];
