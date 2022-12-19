// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract rootVerify {

    receive() external payable {
    }

    struct dipper {
        string d_name; 
        uint currentLocation;
        string[] myRoots;
    }

    struct root {
        string r_name;
        uint[] rootHashs;
    }

    mapping(address => dipper) dipperList;
    mapping(string => root) rootList;

    function setRoot(string memory _r_name, uint[] memory _rootLocation) public {
        rootList[_r_name]= root(_r_name,_rootLocation);
        dipperList[msg.sender].myRoots.push(_r_name);
    }

    function getRootName(string memory _r_name) public view returns(string memory){
        return rootList[_r_name].r_name;
    }
    
    function getRootHashs(string memory _r_name) public view returns(uint[] memory) {
        return rootList[_r_name].rootHashs;
    }

    function setDipper(string memory _d_name) public {
        dipperList[msg.sender].d_name = _d_name;
    }

    function getDipper(address _addr) public view returns(string memory){
        return dipperList[_addr].d_name;
    }

    function currentLocation(uint _currentLocation) public returns(uint) {
        dipperList[msg.sender].currentLocation = _currentLocation;
        return dipperList[msg.sender].currentLocation;
    }

    function verifyLocation(string memory _r_name, uint _currentLocation) public returns(bool){
        currentLocation(_currentLocation);
        uint [] memory roots = rootList[_r_name].rootHashs;
        uint numOfDup = 0;
        for(uint i = 0 ; i<roots.length; i++) {
            roots[i] == _currentLocation ? numOfDup++ : numOfDup;
        } // 이후에 require & transfer 로 변경 
        return (numOfDup !=0 ? true: false);
    }
}