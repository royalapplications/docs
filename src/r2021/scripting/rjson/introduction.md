---
order: 9990
name: Introduction
---

# Introduction

RoyalJSON, or rJSON for short, is an unidirectional, human-read-and-writable data format for importing data from external sources into Royal TS/X.
Its primary objective is to provide users an easy, yet powerful way to get data stored outside of Royal TS/X into the application.

Prime examples where RoyalJSON shines are:
- You have a central database where you store credentials and want to use those credentials in Royal TS/X without having to manually add/update them.
- You have one or more VM hosts where you regularly (un-)provision VMs and want to keep them in sync with Royal TS/X.

At the moment, RoyalJSON is an import-only format and there’s no way to export existing objects stored in Royal TS/X documents as RoyalJSON. This might change in the future though.

Once you have some RoyalJSON content, there are multiple ways to get the data into our applications:
- Via "Dynamic Folder" objects stored in your documents:
Dynamic Folders allow you to specify a script that is executed and expected to return rJSON which is then parsed by the application. After successfully parsing the data, objects are created as children of the Dynamic Folder. All objects created by the Dynamic Folder are immutable.
- By creating and opening an rJSON document:
rJSON documents are simple plain text files that contain rJSON data and are postfixed with the ".rjson" file extension. rJSON documents are immutable when opened with Royal TS/X.

In the future, additional means of working with rJSON in Royal TS/X may be provided.