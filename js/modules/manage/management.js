
 import { localhost } from "./../../adminUrl.js";

 export const Managements = async () => {
 
    try {

        const url = `${localhost}/managements`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);

        const manage = document.querySelector(".manage");

        // principal
        const princ = document.createElement("h1");
        princ.textContent = `${result[0].heading}`;
        princ.classList = " manageSection";
        manage.appendChild(princ);

        const princImg = document.createElement("img");
        princImg.src = `${result[0].principalimg.url}`;
        princImg.classList= "princeImg";
        

        manage.appendChild(princImg);

        // vice principal
        const viceprinc = document.createElement("h1");
        viceprinc.textContent = `${result[0].viceheading}`;
        viceprinc.classList = "viceh1 manageSection";

        manage.appendChild(viceprinc);

        for (let i in result[0].viceprincipalcomp) {

            const viceimg = document.createElement("img");
            viceimg.src = `${result[0].viceprincipalcomp[i].videprincipalImg.url}`;
            viceimg.classList = "viceImg";

            manage.appendChild(viceimg);

            const vicename = document.createElement("h3");
            vicename.textContent = `${result[0].viceprincipalcomp[i].name}`;
           

            manage.appendChild(vicename);

        }

        // teachers

        const thr = document.createElement("h1");
        thr.textContent = `${result[0].tchrs}`;
        thr.classList = "manageSection";
        
        manage.appendChild(thr);

        for (let j in result[0].tchrcomp) {

            const tchrimg = document.createElement("img");
            tchrimg.src = `${result[0].tchrcomp[j].imgtchr.url}`;

            manage.appendChild(tchrimg);

            const tchrname = document.createElement("h3");
            tchrname.textContent = `${result[0].tchrcomp[j].name}`;

            manage.appendChild(tchrname);

            const sub = document.createElement("p");
            sub.textContent = `${result[0].tchrcomp[j].sub[0].subname}`;

            manage.append(sub);

            const cls = document.createElement("p");
            cls.textContent = `${result[0].tchrcomp[j].class[0].classesname}`;

            manage.appendChild(cls);

        }

          // workers

          const wrkHeading = document.createElement("h1");
          wrkHeading.textContent = `${result[0].workers}`;
          wrkHeading.classList = "manageSection";
          
          manage.appendChild(wrkHeading);
  
          for (let k in result[0].workersprof) {
  
              const wrkimg = document.createElement("img");
              wrkimg.src = `${result[0].workersprof[k].workerimg[0].url}`;
  
              manage.appendChild(wrkimg);
  
              const wrkh3 = document.createElement("h3");
              wrkh3.textContent = `${result[0].workersprof[k].workername}`;
  
              manage.appendChild(wrkh3);
  
              const wrkstatus = document.createElement("p");
              wrkstatus.textContent = `${result[0].workersprof[k].workerstatus}`;
  
              manage.append(wrkstatus);
  
              
          }

        //   number of share holders

        const share = document.createElement("h4");
        share.textContent = `${result[0].shareholdersheading}`;
        share.classList = "manageSection";

        manage.appendChild(share);

        

        }
        
    

    
    catch(error) {
        console.log("failed", error);
    }
    }