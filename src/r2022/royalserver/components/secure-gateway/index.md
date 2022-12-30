---
name: Secure Gateway
order: 7000
---

# Secure Gateway

The Secure Gateway is a component in Royal Server that enables the user to securely tunnel the traffic through Royal Server. This is done by using an encrypted SSH tunnel (aka port forwarding).

### Accessing the Secure Gateway component

The Secure Gateway is only accepting authenticated requests and the Secure Gateway configuration in Royal TS/X needs to be configured with a Credential. The Secure Gateway only accepts user accounts that are in the local Windows group `Royal Server Gateway Users`. If the specified Credential is not member of this group, the Secure Gateway component will return an authentication error.
