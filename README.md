
# MagicPack

MagicPack is a web-based Wake-On-Lan tool intended for use by teams or companies.

![Screenshot](https://i.ibb.co/3FRtn3H/github-banner.png)

## Usage example

Your employees connect to their company computer from their home via a VPN & RDP. In order to do that, they leave their company computer running 24/7 when they are working from home.
In order to save electricity costs, you can deploy MagicPack and offer your employees a solution to turn on their company computer from home via their individual link.

## Deploy MagicPack using Docker

### Requirements
- Linux system (Docker network_mode:_host Support)
- Docker installed

### Deployment

1. Clone this git repository

``git clone https://github.com/alex-swki/magicpack``

2. cd into the repository and change environment variables (explained below)

``cd magicpack && nano .env``

3. Add computers (can also be done later)

``nano computers.json``

4. Start the docker container via docker compose

``docker compose up -d``

> **INFO:** If you would like to apply changes of the .env file after creating the container, use the following command

``docker compose restart``

## computers.json

The computers.json file can be edited both before creating the container or as the container is running. In the docker compose file it is configured as a bind mount. Editing it on the docker host file system means editing the file on the container. There is no need to stop the container when adding an entry.

To start, I suggest using the existing computers.json and simply replacing the placeholder values with your actual info.

The file structure requires { } around the actual entries which look like this:

    "john-doe": {
        "name": "John Doe",
        "computer": {
    	    "location": "Main Office",
    	    "name": "XY-PC001",
    	    "mac": "A1:B2:C3:4D:5E:6F",
    	    "dns": "xy-pc002.google.de"
        }
    }

"john-doe" sets the path you need to enter in order to turn on the defined computer.

=> .envURL/john-doe

=> http://localhost:3000/john-doe (if URL in .env == http://localhost:3000)

"name" is the display name. I suggest you put in the primary user of the defined computer.

"computer.location" is a display name for the location of the computer.

"computer.name" is a display name for the actual computer name.

"computer.mac" is the mac address of the NIC that the magic packet should be sent to. You need to follow this syntax: **A1:B2:C3:4D:5E:6F**.

"computer.dns" is the dns name or ip address of the computer which is used for ping.

## .env

> Change the environment variables accordingly before starting the docker container.

_NEXT_PUBLIC_URL="http://localhost:3000"_
Set this to the URL which users will access MagicPack with

_NEXT_PUBLIC_COLOR_THEME="DARK"_
Can either be "LIGHT" or "DARK".

_NEXT_PUBLIC_COMPANY_LOGO_PATH="**/img/logo.png**"_
Path to your company logo. Actual path will be /magicpack-app/public/**img/logo.png**

_NEXT_PUBLIC_COMPANY_LOGO_WIDTH=240_
Adjust this value if your company logo is too big or too small. Width in CSS Pixel

_NEXT_PUBLIC_PAGE_TITLE="Wake On Lan"_
Enter any string you like in here for the title position.

_NEXT_PUBLIC_PAGE_DESC1="Wake up your company computer using the button below."_
Enter any string you like in here for the 1st paragraph.

_NEXT_PUBLIC_PAGE_DESC2="When your computer is running, you can connect via Remote Desktop."_
Enter any string you like in here for the 2nd paragraph.

## API
If you do not want to use the front-end, use the API of my application to wake up your PCs.
Simply HTTP Put to /api/wake
Request Body:

    {"mac": "A1:B2:C3:4D:5E:6F"}
