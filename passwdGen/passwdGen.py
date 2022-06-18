from pymongo import MongoClient
cluster = MongoClient('mongodb://127.0.0.1:27017')
db=cluster['aids_feedback_form_db']
collections=db['userLogIn']
fullNames=[]
rollNos=[]
userNames=[]
full_rollNos=[]
# with open('./Name_List.txt','r') as nameList:
#     for line in nameList:
#         name,rollNo=(line.split(',')[2]),(line.split(',')[3])
#         fullNames.append(name)
#         full_rollNos.append(rollNo)
#         rollNos.append(rollNo[5:])
# for name in fullNames:
#     if(len(name.split('.'))==2):
#         initials1,name=name.split('.')
#     if(len(name.split('.'))>2):
#         initials1,initials2,name=name.split('.')
#     else:
#         if(len(name.split())==2):
#             name,initials=name.split()
#         elif(len(name.split())==4):
#             name,name2,initials1,initials2=name.split()
#             name+=name2
#         elif(len(name.split())==3):
#             name,initials1,initials2=name.split()
#     userNames.append(name[:3]) 
# passwords=[x+y for x,y in zip(userNames,rollNos)]
# userData=[]
# i=0
# for x,y in zip(fullNames,passwords):
#     userData.append({'name':x.strip(),'username':full_rollNos[i].strip(),'password':y.strip() , 'userRole':'student'})
#     i+=1
# collections.insert_many(userData)
# collections.insert_one({'username':'21aidts011','password':'21aidts011','userRole':'faculty'})
# print('inserted')
# collections.insert_one({'name':'Faculty1','username':'21aidts012','password':'21aidts012','userRole':'faculty'})
# print('inserted')
# collections.insert_one({'name':'Faculty2','username':'21aidts013','password':'21aidts013','userRole':'faculty'})
# print('inserted')
# collections.insert_one({'name':'Faculty3','username':'04itts0026','password':'04itts0026','userRole':'faculty'})
# print('inserted')
collections=db['Courses']
course_dict1={'19IT301':['DATA STRUCTURES','Implement the various linear data structures using arrays and pointers','Implement the different non-linear data structures','Develop the various heap structures','Work with searching and hashing techniques','Apply traversal algorithms in graph']}
course_dict2={'19IT302':['DATABASE MANAGEMENT SYSTEMS','Explore the basic concepts of Database system and design database for enterprise applications using Entity Relationship Diagrams','Analyze the consequence of calculus in designing relational model and create database using query languages with constraints and security','Normalize databases to reduce cost due to redundancy constraints','Assess different types of scheduling and recovery techniques for concurrent transactions','Validate the query evaluation plan and optimize to reduce computational complexity']}
course_dict3={'19AD301':['PYTHON PROGRAMMING','Develop basic programs using fundamental structures','Create programs using various collection data types','Apply appropriate Python control flow structure','Implement user defined python functions','Design classes and use them']}
course_dict4={'19AD302':['INTRODUCTION TO AI AND DATA SCIENCE','Apply various searching algorithm in AI','Apply various knowledge representation methods','Explore the basics of data science','Apply concepts of Data Collection and Data Pre-Processing','Work with data analytics']}
collections=db['Courses']
l1=[course_dict1,course_dict2,course_dict3,course_dict4]
for i in l1:
    for k,v in i.items():
        collections.insert_one({'regulation':19,'courseId':k,'courseName':v[0],'CO':v[1:]})