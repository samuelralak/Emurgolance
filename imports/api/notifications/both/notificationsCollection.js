export const Notifications = new Mongo.Collection('notifications')

if (Meteor.isServer) {
	Meteor.publish('notifications', () => Notifications.find({
		userId: Meteor.userId(),
		$or: [{
			type: 'notification'
		}, {
			type: {
				$exists: false
			}
		}]
	}))

}
