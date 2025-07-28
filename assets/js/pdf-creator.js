function pdfCreator() {
    var orgName = document.getElementById('orgName');
    var orgPhone = document.getElementById('orgPhone');
    var phone;
    if(orgPhone === ""){
      phone = "01632 123456";
    } else {
      phone = orgPhone.value;
    }
    var orgEmail = document.getElementById('orgEmail');
    var email;
    if(orgEmail === ""){
      email = "example@domain.com";
    } else {
      email = orgEmail.value;
    }
    var orgWorkers = document.getElementById('orgWorkers');
    var workers;
    if(orgWorkers === ""){
      workers = "example@domain.com";
    } else {
      workers = orgWorkers.value;
    }
    var roi = document.getElementById('roi');
    var roiTime;
    if(roi === ""){
      roiTime = "4 Years";
    } else {
      roiTime = roi.value;
    }
    var orgType = document.getElementById('orgType').value;
    var jobRole = document.getElementById('jobRole');
    var role;
    if(role === ""){
      role = "Managing Director";
    } else {
      role = jobRole.value;
    }
    var name = document.getElementById('name');
    var nameValue;
    if(name === ""){
      nameValue = "John Smith";
    } else {
      nameValue = name.value;
    }
    var orgTypeValue;
    if (document.getElementById('type1').checked) {
      orgTypeValue = document.getElementById('type1').value;
    } else if (document.getElementById('type2').checked) {
      orgTypeValue = document.getElementById('type2').value;
    } else if (document.getElementById('type3').checked) {
      orgTypeValue = document.getElementById('type3').value;
    }
    var date = document.getElementById('date');
    var startDate;
    if (date.value === "") {
      startDate = new Intl.DateTimeFormat('en-GB').format();
    } else {
      startDate = date.value;
    }
  
    var docDefinition = {
  
      info: {
        title: 'INVESTMENT POLICY TO PREVENT GLOBAL WARMING',
        subject: 'INVESTMENT POLICY TO PREVENT GLOBAL WARMING'
      },
  
      pageMargins: [45, 105, 45, 60],
  
      footer: {
        margin: [45, 0, 45, 0],
        text: [
          'This policy is copyright free and any, or all of it can be adopted at will by any organisation. Create your own by visiting, https://www.aesseal.com/en/resources/industry-guides/policy-prevent-global-warming'
        ],
        style: 'subsmall'
      },
  
      content: [{
          text: 'INVESTMENT POLICY TO PREVENT GLOBAL WARMING\n\n',
          style: 'header'
        },
        {
          text: 'The health of the Earth is essential to not just business, but also species survival.\n\n',
          style: 'subheader'
        },
        {
          text: [
            'The Health, Safety and Welfare of all the stakeholders in our ', orgTypeValue, ' is the primary concern of the Board of ', orgName.value, '.\n\n'
          ]
        },
        {
          text: [
            'The ', orgTypeValue, ' has consistently put sustainability projects first for capital investment and has now decided to debate and publish a policy to prevent global warming through technological change and investment decisions.\n\n',
          ]
        },
        {
          ul: [
            'Any sustainability project will be given priority over any other capital investment with a similar Return on Investment.\n\n',
            {
              text: ['Any sustainability project with a reasonable chance of getting a Return on Investment of ', roiTime, ' or less, should be brought to the attention of the ', orgName.value, '.\n\n']
            },
            'A written decision on any such project is mandatory within 3 months of project submission.\n\n',
            {
              text: ['All global business heads have local spending authority. Any sustainability project with a higher value should be immediately referred to the Board of ', orgName.value, '.\n\n']
            },
            {
              text: ['As a Board we undertake to use our personal and corporate presence to influence policy makers to legislate the requirement for such a policy for all businesses with more than ', workers, ' co-workers.\n\n']
            },
            'Current or potential supplier input is welcomed, including their use of the global hotline where necessary.\n\n'
          ],
        },
        {
          text: ['The Board of ', orgName.value, ' encourage employees and stakeholders to contact us by ', phone, ' or by email on ', email, ' to assist with the discreet implementation of this policy where necessary.']
        },
        {
          text: ['\n\n']
        },
        {
          text: ['.......................................................................................\n\n']
        },
        {
          text: ['', nameValue, '\n\n']
        },
        {
          text: ['', role, '']
        },
        {
          text: ['', startDate],
          style: ['date']
        }
      ],
  
      styles: {
        header: {
          fontSize: 26,
          alignment: 'center',
          color: '#60991f',
          bold: true
        },
        subheader: {
          fontSize: 20,
          alignment: 'center',
          color: '#60991f',
          bold: true
        },
        defaultStyle: {
          fontSize: 12
        },
        small: {
          fontSize: 10
        },
        subsmall: {
          fontSize: 8
        },
        date: {
          alignment: 'right'
        }
      }
    };
    var pdf = pdfMake.createPdf(docDefinition).download('Policy-to-prevent-Global-Warming.pdf');
  }
  
  function pdfOpen() {
    var orgName = document.getElementById('orgName');
    var orgPhone = document.getElementById('orgPhone');
    var phone;
    if(orgPhone === ""){
      phone = "01632 123456";
    } else {
      phone = orgPhone.value;
    }
    var orgEmail = document.getElementById('orgEmail');
    var email;
    if(orgEmail === ""){
      email = "example@domain.com";
    } else {
      email = orgEmail.value;
    }
    var orgWorkers = document.getElementById('orgWorkers');
    var workers;
    if(orgWorkers === ""){
      workers = "example@domain.com";
    } else {
      workers = orgWorkers.value;
    }
    var roi = document.getElementById('roi');
    var roiTime;
    if(roi === ""){
      roiTime = "4 Years";
    } else {
      roiTime = roi.value;
    }
    var jobRole = document.getElementById('jobRole');
    var role;
    if(role === ""){
      role = "Managing Director";
    } else {
      role = jobRole.value;
    }
    var name = document.getElementById('name');
    var nameValue;
    if(name === ""){
      nameValue = "John Smith";
    } else {
      nameValue = name.value;
    }
    var orgTypeValue;
    if (document.getElementById('type1').checked) {
      orgTypeValue = document.getElementById('type1').value;
    } else if (document.getElementById('type2').checked) {
      orgTypeValue = document.getElementById('type2').value;
    } else if (document.getElementById('type3').checked) {
      orgTypeValue = document.getElementById('type3').value;
    }
    var date = document.getElementById('date');
    var startDate;
    if (date.value === "") {
      startDate = new Intl.DateTimeFormat('en-GB').format();
    } else {
      startDate = date.value;
    }
  
    var docDefinition = {
  
      info: {
        title: 'INVESTMENT POLICY TO PREVENT GLOBAL WARMING',
        subject: 'INVESTMENT POLICY TO PREVENT GLOBAL WARMING'
      },
      pageMargins: [45, 105, 45, 60],
  
      footer: {
        margin: [45, 0, 45, 0],
        text: [
          'This policy is copyright free and any, or all of it can be adopted at will by any organisation. Create your own by visiting, https://www.aesseal.com/en/resources/industry-guides/policy-prevent-global-warming'
        ],
        style: 'subsmall'
      },
  
      content: [{
          text: 'INVESTMENT POLICY TO PREVENT GLOBAL WARMING\n\n',
          style: 'header'
        },
        {
          text: 'The health of the Earth is essential to not just business, but also species survival.\n\n',
          style: 'subheader'
        },
        {
          text: [
            'The Health, Safety and Welfare of all the stakeholders in our ', orgTypeValue, ' is the primary concern of the Board of ', orgName.value, '.\n\n'
          ]
        },
        {
          text: [
            'The ', orgTypeValue, ' has consistently put sustainability projects first for capital investment and has now decided to debate and publish a policy to prevent global warming through technological change and investment decisions.\n\n',
          ]
        },
        {
          ul: [
            'Any sustainability project will be given priority over any other capital investment with a similar Return on Investment.\n\n',
            {
              text: ['Any sustainability project with a reasonable chance of getting a Return on Investment of ', roiTime, ' or less, should be brought to the attention of the ', orgName.value, '.\n\n']
            },
            'A written decision on any such project is mandatory within 3 months of project submission.\n\n',
            {
              text: ['All global business heads have local spending authority. Any sustainability project with a higher value should be immediately referred to the Board of ', orgName.value, '.\n\n']
            },
            {
              text: ['As a Board we undertake to use our personal and corporate presence to influence policy makers to legislate the requirement for such a policy for all businesses with more than ', workers, ' co-workers.\n\n']
            },
            'Current or potential supplier input is welcomed, including their use of the global hotline where necessary.\n\n'
          ],
        },
        {
          text: ['The Board of ', orgName.value, ' encourage employees and stakeholders to contact us by ', phone, ' or by email on ', email, ' to assist with the discreet implementation of this policy where necessary.']
        },
        {
          text: ['\n\n']
        },
        {
          text: ['.......................................................................................\n\n']
        },
        {
          text: ['', nameValue, '\n\n']
        },
        {
          text: ['', role, '']
        },
        {
          text: ['', startDate],
          style: ['date']
        }
      ],
  
      styles: {
        header: {
          fontSize: 26,
          alignment: 'center',
          color: '#60991f',
          bold: true
        },
        subheader: {
          fontSize: 20,
          alignment: 'center',
          color: '#60991f',
          bold: true
        },
        defaultStyle: {
          fontSize: 12
        },
        small: {
          fontSize: 10
        },
        subsmall: {
          fontSize: 8
        },
        date: {
          alignment: 'right'
        }
      }
    };
    var pdf = pdfMake.createPdf(docDefinition).open();
  }
  
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("downloadPDF").addEventListener("click", function() {
      pdfCreator();
    });
  
    document.getElementById("savePDF").addEventListener("click", function() {
      pdfOpen();
    });
  });