# branch-execution2

                                                                  Repository Structure
                                                                        main.yml
                                                                            ↓
                                                                          it.yml
                                                                            ↓
                                                                          qa.yml
                                                                            ↓
                                                                          uat.yml
                                                                              
                                                                              
                                                                      Composite Actions:
                                                                            - scm
                                                                            - sast



                                                                                SIT
                                                                                │
                                                                                ├── Checkout Selected Branch
                                                                                │       │
                                                                                │       └── Download release-1.0 code
                                                                                │
├── Display Branch Information
│
├── SCM Validation
│       │
│       ├── Verify Repository Structure
│       ├── Verify Required Files
│       └── Show Commit Details
│
├── SAST Validation
│       │
│       └── Security Scan
│
├── Start Application
│       │
│       ├── npm install
│       └── node app.js
│
├── Checkout Katalon Branch
│       │
│       └── Download Functional Test Scripts
│
├── Smoke Test
│
├── Product Test
│
├── Navigation Test
│
├── Generate Functional Report
│
└── Upload Functional Report
